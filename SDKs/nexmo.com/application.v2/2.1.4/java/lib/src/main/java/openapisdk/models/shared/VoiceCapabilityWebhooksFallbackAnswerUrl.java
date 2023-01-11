package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class VoiceCapabilityWebhooksFallbackAnswerUrl {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("address")
    public String address;
    public VoiceCapabilityWebhooksFallbackAnswerUrl withAddress(String address) {
        this.address = address;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("connection_timeout")
    public Long connectionTimeout;
    public VoiceCapabilityWebhooksFallbackAnswerUrl withConnectionTimeout(Long connectionTimeout) {
        this.connectionTimeout = connectionTimeout;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("http_method")
    public VoiceCapabilityWebhooksFallbackAnswerUrlHttpMethodEnum httpMethod;
    public VoiceCapabilityWebhooksFallbackAnswerUrl withHttpMethod(VoiceCapabilityWebhooksFallbackAnswerUrlHttpMethodEnum httpMethod) {
        this.httpMethod = httpMethod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("socket_timeout")
    public Long socketTimeout;
    public VoiceCapabilityWebhooksFallbackAnswerUrl withSocketTimeout(Long socketTimeout) {
        this.socketTimeout = socketTimeout;
        return this;
    }
}