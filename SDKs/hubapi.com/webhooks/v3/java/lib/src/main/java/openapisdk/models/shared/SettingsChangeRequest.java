package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * SettingsChangeRequest
 * New or updated webhook settings for an app.
**/
public class SettingsChangeRequest {
    @JsonProperty("targetUrl")
    public String targetUrl;
    public SettingsChangeRequest withTargetUrl(String targetUrl) {
        this.targetUrl = targetUrl;
        return this;
    }
    @JsonProperty("throttling")
    public ThrottlingSettings throttling;
    public SettingsChangeRequest withThrottling(ThrottlingSettings throttling) {
        this.throttling = throttling;
        return this;
    }
}