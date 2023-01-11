package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class VoiceWebhooks {
    @JsonProperty("endpoint")
    public String endpoint;
    public VoiceWebhooks withEndpoint(String endpoint) {
        this.endpoint = endpoint;
        return this;
    }
    @JsonProperty("endpoint_type")
    public VoiceWebhooksEndpointTypeEnum endpointType;
    public VoiceWebhooks withEndpointType(VoiceWebhooksEndpointTypeEnum endpointType) {
        this.endpointType = endpointType;
        return this;
    }
    @JsonProperty("http_method")
    public VoiceWebhooksHttpMethodEnum httpMethod;
    public VoiceWebhooks withHttpMethod(VoiceWebhooksHttpMethodEnum httpMethod) {
        this.httpMethod = httpMethod;
        return this;
    }
}