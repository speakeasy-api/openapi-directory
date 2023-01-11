package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AddGoogleAnalyticsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("analyticsAccountId")
    public String analyticsAccountId;
    public AddGoogleAnalyticsRequest withAnalyticsAccountId(String analyticsAccountId) {
        this.analyticsAccountId = analyticsAccountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("analyticsPropertyId")
    public String analyticsPropertyId;
    public AddGoogleAnalyticsRequest withAnalyticsPropertyId(String analyticsPropertyId) {
        this.analyticsPropertyId = analyticsPropertyId;
        return this;
    }
}