package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ApnsFcmOptions
 * Options for features provided by the FCM SDK for iOS.
**/
public class ApnsFcmOptions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("analyticsLabel")
    public String analyticsLabel;
    public ApnsFcmOptions withAnalyticsLabel(String analyticsLabel) {
        this.analyticsLabel = analyticsLabel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("image")
    public String image;
    public ApnsFcmOptions withImage(String image) {
        this.image = image;
        return this;
    }
}