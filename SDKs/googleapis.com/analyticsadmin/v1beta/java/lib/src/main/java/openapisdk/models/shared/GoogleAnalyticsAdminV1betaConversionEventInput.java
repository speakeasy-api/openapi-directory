package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleAnalyticsAdminV1betaConversionEventInput
 * A conversion event in a Google Analytics property.
**/
public class GoogleAnalyticsAdminV1betaConversionEventInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("eventName")
    public String eventName;
    public GoogleAnalyticsAdminV1betaConversionEventInput withEventName(String eventName) {
        this.eventName = eventName;
        return this;
    }
}