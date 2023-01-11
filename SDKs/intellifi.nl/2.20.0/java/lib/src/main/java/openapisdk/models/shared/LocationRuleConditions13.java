package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class LocationRuleConditions13 {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("from_location_url")
    public String fromLocationUrl;
    public LocationRuleConditions13 withFromLocationUrl(String fromLocationUrl) {
        this.fromLocationUrl = fromLocationUrl;
        return this;
    }
}