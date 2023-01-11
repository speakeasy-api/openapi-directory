package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * VoiceCapabilityWebhooksEventUrl
 * Vonage will send call events (e.g. `ringing`, `answered`) to this URL
**/
public class VoiceCapabilityWebhooksEventUrl {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("address")
    public String address;
    public VoiceCapabilityWebhooksEventUrl withAddress(String address) {
        this.address = address;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("connection_timeout")
    public Long connectionTimeout;
    public VoiceCapabilityWebhooksEventUrl withConnectionTimeout(Long connectionTimeout) {
        this.connectionTimeout = connectionTimeout;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("http_method")
    public VoiceCapabilityWebhooksEventUrlHttpMethodEnum httpMethod;
    public VoiceCapabilityWebhooksEventUrl withHttpMethod(VoiceCapabilityWebhooksEventUrlHttpMethodEnum httpMethod) {
        this.httpMethod = httpMethod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("socket_timeout")
    public Long socketTimeout;
    public VoiceCapabilityWebhooksEventUrl withSocketTimeout(Long socketTimeout) {
        this.socketTimeout = socketTimeout;
        return this;
    }
}