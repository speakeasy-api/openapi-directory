package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ProcessorApexProcessorTokenCreateRequest
 * ProcessorApexProcessorTokenCreateRequest defines the request schema for `/processor/apex/processor_token/create`
**/
public class ProcessorApexProcessorTokenCreateRequest {
    @JsonProperty("access_token")
    public String accessToken;
    public ProcessorApexProcessorTokenCreateRequest withAccessToken(String accessToken) {
        this.accessToken = accessToken;
        return this;
    }
    @JsonProperty("account_id")
    public String accountId;
    public ProcessorApexProcessorTokenCreateRequest withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("client_id")
    public String clientId;
    public ProcessorApexProcessorTokenCreateRequest withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secret")
    public String secret;
    public ProcessorApexProcessorTokenCreateRequest withSecret(String secret) {
        this.secret = secret;
        return this;
    }
}