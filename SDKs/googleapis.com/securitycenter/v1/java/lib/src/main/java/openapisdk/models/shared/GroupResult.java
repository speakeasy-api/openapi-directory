package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GroupResult
 * Result containing the properties and count of a groupBy request.
**/
public class GroupResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("count")
    public String count;
    public GroupResult withCount(String count) {
        this.count = count;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("properties")
    public java.util.Map<String, Object> properties;
    public GroupResult withProperties(java.util.Map<String, Object> properties) {
        this.properties = properties;
        return this;
    }
}