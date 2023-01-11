package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Options
 * Additional query options.
**/
public class Options {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("includeOnlyTargetedUserLists")
    public Boolean includeOnlyTargetedUserLists;
    public Options withIncludeOnlyTargetedUserLists(Boolean includeOnlyTargetedUserLists) {
        this.includeOnlyTargetedUserLists = includeOnlyTargetedUserLists;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pathQueryOptions")
    public PathQueryOptions pathQueryOptions;
    public Options withPathQueryOptions(PathQueryOptions pathQueryOptions) {
        this.pathQueryOptions = pathQueryOptions;
        return this;
    }
}