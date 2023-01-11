package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RemoveAnalyticsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("analyticsPropertyId")
    public String analyticsPropertyId;
    public RemoveAnalyticsRequest withAnalyticsPropertyId(String analyticsPropertyId) {
        this.analyticsPropertyId = analyticsPropertyId;
        return this;
    }
}