package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GroupQuery
 * The criteria defining the group
**/
public class GroupQuery {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("composition")
    public GroupQueryCompositionEnum composition;
    public GroupQuery withComposition(GroupQueryCompositionEnum composition) {
        this.composition = composition;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("select")
    public String select;
    public GroupQuery withSelect(String select) {
        this.select = select;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("where")
    public GroupQueryWhere[] where;
    public GroupQuery withWhere(GroupQueryWhere[] where) {
        this.where = where;
        return this;
    }
}