package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GroupUpdateQuery
 * The criteria defining the group. If not provided, the group will be empty.
**/
public class GroupUpdateQuery {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("composition")
    public GroupUpdateQueryCompositionEnum composition;
    public GroupUpdateQuery withComposition(GroupUpdateQueryCompositionEnum composition) {
        this.composition = composition;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("select")
    public String select;
    public GroupUpdateQuery withSelect(String select) {
        this.select = select;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("where")
    public GroupUpdateQueryWhere[] where;
    public GroupUpdateQuery withWhere(GroupUpdateQueryWhere[] where) {
        this.where = where;
        return this;
    }
}