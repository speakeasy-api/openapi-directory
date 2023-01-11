package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Getcurrentvalues {
    @JsonProperty("endpoint_enabled")
    public Boolean endpointEnabled;
    public Getcurrentvalues withEndpointEnabled(Boolean endpointEnabled) {
        this.endpointEnabled = endpointEnabled;
        return this;
    }
    @JsonProperty("hotword_enabled")
    public Boolean hotwordEnabled;
    public Getcurrentvalues withHotwordEnabled(Boolean hotwordEnabled) {
        this.hotwordEnabled = hotwordEnabled;
        return this;
    }
}