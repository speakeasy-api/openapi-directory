package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * QueryQueryGroup
 * The querys' groups
**/
public class QueryQueryGroup {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Group")
    public Object[] group;
    public QueryQueryGroup withGroup(Object[] group) {
        this.group = group;
        return this;
    }
}