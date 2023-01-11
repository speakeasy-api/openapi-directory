package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FcmOptions
 * Platform independent options for features provided by the FCM SDKs.
**/
public class FcmOptions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("analyticsLabel")
    public String analyticsLabel;
    public FcmOptions withAnalyticsLabel(String analyticsLabel) {
        this.analyticsLabel = analyticsLabel;
        return this;
    }
}