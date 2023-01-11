package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class LocationRuleConditions23 {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("to_location_url")
    public String toLocationUrl;
    public LocationRuleConditions23 withToLocationUrl(String toLocationUrl) {
        this.toLocationUrl = toLocationUrl;
        return this;
    }
}