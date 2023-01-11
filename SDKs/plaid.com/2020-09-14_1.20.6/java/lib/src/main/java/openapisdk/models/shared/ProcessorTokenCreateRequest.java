package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ProcessorTokenCreateRequest
 * ProcessorTokenCreateRequest defines the request schema for `/processor/token/create`
**/
public class ProcessorTokenCreateRequest {
    @JsonProperty("access_token")
    public String accessToken;
    public ProcessorTokenCreateRequest withAccessToken(String accessToken) {
        this.accessToken = accessToken;
        return this;
    }
    @JsonProperty("account_id")
    public String accountId;
    public ProcessorTokenCreateRequest withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("client_id")
    public String clientId;
    public ProcessorTokenCreateRequest withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    @JsonProperty("processor")
    public ProcessorTokenCreateRequestProcessorEnum processor;
    public ProcessorTokenCreateRequest withProcessor(ProcessorTokenCreateRequestProcessorEnum processor) {
        this.processor = processor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secret")
    public String secret;
    public ProcessorTokenCreateRequest withSecret(String secret) {
        this.secret = secret;
        return this;
    }
}