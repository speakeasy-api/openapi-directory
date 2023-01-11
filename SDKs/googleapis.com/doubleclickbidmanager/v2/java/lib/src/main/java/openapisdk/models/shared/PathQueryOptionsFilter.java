package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PathQueryOptionsFilter
 * Dimension filter on path events.
**/
public class PathQueryOptionsFilter {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filter")
    public String filter;
    public PathQueryOptionsFilter withFilter(String filter) {
        this.filter = filter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("match")
    public PathQueryOptionsFilterMatchEnum match;
    public PathQueryOptionsFilter withMatch(PathQueryOptionsFilterMatchEnum match) {
        this.match = match;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("values")
    public String[] values;
    public PathQueryOptionsFilter withValues(String[] values) {
        this.values = values;
        return this;
    }
}