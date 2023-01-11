package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class MessagesWebhooks {
    @JsonProperty("endpoint")
    public String endpoint;
    public MessagesWebhooks withEndpoint(String endpoint) {
        this.endpoint = endpoint;
        return this;
    }
    @JsonProperty("endpoint_type")
    public MessagesWebhooksEndpointTypeEnum endpointType;
    public MessagesWebhooks withEndpointType(MessagesWebhooksEndpointTypeEnum endpointType) {
        this.endpointType = endpointType;
        return this;
    }
    @JsonProperty("http_method")
    public MessagesWebhooksHttpMethodEnum httpMethod;
    public MessagesWebhooks withHttpMethod(MessagesWebhooksHttpMethodEnum httpMethod) {
        this.httpMethod = httpMethod;
        return this;
    }
}