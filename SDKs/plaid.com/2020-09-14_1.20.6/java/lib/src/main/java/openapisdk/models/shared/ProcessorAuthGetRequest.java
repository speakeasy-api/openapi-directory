package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ProcessorAuthGetRequest
 * ProcessorAuthGetRequest defines the request schema for `/processor/auth/get`
**/
public class ProcessorAuthGetRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("client_id")
    public String clientId;
    public ProcessorAuthGetRequest withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    @JsonProperty("processor_token")
    public String processorToken;
    public ProcessorAuthGetRequest withProcessorToken(String processorToken) {
        this.processorToken = processorToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secret")
    public String secret;
    public ProcessorAuthGetRequest withSecret(String secret) {
        this.secret = secret;
        return this;
    }
}