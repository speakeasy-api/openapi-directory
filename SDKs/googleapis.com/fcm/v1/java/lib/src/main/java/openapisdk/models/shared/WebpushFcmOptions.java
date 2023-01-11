package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * WebpushFcmOptions
 * Options for features provided by the FCM SDK for Web.
**/
public class WebpushFcmOptions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("analyticsLabel")
    public String analyticsLabel;
    public WebpushFcmOptions withAnalyticsLabel(String analyticsLabel) {
        this.analyticsLabel = analyticsLabel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("link")
    public String link;
    public WebpushFcmOptions withLink(String link) {
        this.link = link;
        return this;
    }
}