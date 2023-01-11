package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ProcessorBalanceGetRequest
 * ProcessorBalanceGetRequest defines the request schema for `/processor/balance/get`
**/
public class ProcessorBalanceGetRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("client_id")
    public String clientId;
    public ProcessorBalanceGetRequest withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    @JsonProperty("processor_token")
    public String processorToken;
    public ProcessorBalanceGetRequest withProcessorToken(String processorToken) {
        this.processorToken = processorToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secret")
    public String secret;
    public ProcessorBalanceGetRequest withSecret(String secret) {
        this.secret = secret;
        return this;
    }
}