package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class VoiceCapabilityWebhooksAnswerUrl {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("address")
    public String address;
    public VoiceCapabilityWebhooksAnswerUrl withAddress(String address) {
        this.address = address;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("connection_timeout")
    public Long connectionTimeout;
    public VoiceCapabilityWebhooksAnswerUrl withConnectionTimeout(Long connectionTimeout) {
        this.connectionTimeout = connectionTimeout;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("http_method")
    public VoiceCapabilityWebhooksAnswerUrlHttpMethodEnum httpMethod;
    public VoiceCapabilityWebhooksAnswerUrl withHttpMethod(VoiceCapabilityWebhooksAnswerUrlHttpMethodEnum httpMethod) {
        this.httpMethod = httpMethod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("socket_timeout")
    public Long socketTimeout;
    public VoiceCapabilityWebhooksAnswerUrl withSocketTimeout(Long socketTimeout) {
        this.socketTimeout = socketTimeout;
        return this;
    }
}