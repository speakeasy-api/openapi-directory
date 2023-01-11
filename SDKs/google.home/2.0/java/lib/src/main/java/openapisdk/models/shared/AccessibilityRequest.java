package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AccessibilityRequest {
    @JsonProperty("endpoint_enabled")
    public Boolean endpointEnabled;
    public AccessibilityRequest withEndpointEnabled(Boolean endpointEnabled) {
        this.endpointEnabled = endpointEnabled;
        return this;
    }
    @JsonProperty("hotword_enabled")
    public Boolean hotwordEnabled;
    public AccessibilityRequest withHotwordEnabled(Boolean hotwordEnabled) {
        this.hotwordEnabled = hotwordEnabled;
        return this;
    }
}