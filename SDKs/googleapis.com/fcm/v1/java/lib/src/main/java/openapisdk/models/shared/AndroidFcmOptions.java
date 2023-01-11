package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AndroidFcmOptions
 * Options for features provided by the FCM SDK for Android.
**/
public class AndroidFcmOptions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("analyticsLabel")
    public String analyticsLabel;
    public AndroidFcmOptions withAnalyticsLabel(String analyticsLabel) {
        this.analyticsLabel = analyticsLabel;
        return this;
    }
}