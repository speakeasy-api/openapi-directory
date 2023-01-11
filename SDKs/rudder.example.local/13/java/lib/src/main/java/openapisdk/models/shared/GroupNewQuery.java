package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GroupNewQuery
 * The criteria defining the group. If not provided, the group will be empty.
**/
public class GroupNewQuery {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("composition")
    public GroupNewQueryCompositionEnum composition;
    public GroupNewQuery withComposition(GroupNewQueryCompositionEnum composition) {
        this.composition = composition;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("select")
    public String select;
    public GroupNewQuery withSelect(String select) {
        this.select = select;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("where")
    public GroupNewQueryWhere[] where;
    public GroupNewQuery withWhere(GroupNewQueryWhere[] where) {
        this.where = where;
        return this;
    }
}