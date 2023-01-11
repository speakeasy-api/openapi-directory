package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ProcessorIdentityGetRequest
 * ProcessorIdentityGetRequest defines the request schema for `/processor/identity/get`
**/
public class ProcessorIdentityGetRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("client_id")
    public String clientId;
    public ProcessorIdentityGetRequest withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    @JsonProperty("processor_token")
    public String processorToken;
    public ProcessorIdentityGetRequest withProcessorToken(String processorToken) {
        this.processorToken = processorToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secret")
    public String secret;
    public ProcessorIdentityGetRequest withSecret(String secret) {
        this.secret = secret;
        return this;
    }
}