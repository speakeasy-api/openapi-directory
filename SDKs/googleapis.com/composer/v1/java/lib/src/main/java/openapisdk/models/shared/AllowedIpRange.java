package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AllowedIpRange
 * Allowed IP range with user-provided description.
**/
public class AllowedIpRange {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public AllowedIpRange withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public AllowedIpRange withValue(String value) {
        this.value = value;
        return this;
    }
}