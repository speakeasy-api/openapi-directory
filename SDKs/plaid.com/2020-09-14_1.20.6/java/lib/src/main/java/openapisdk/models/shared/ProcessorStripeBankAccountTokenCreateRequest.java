package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ProcessorStripeBankAccountTokenCreateRequest
 * ProcessorStripeBankAccountTokenCreateRequest defines the request schema for `/processor/stripe/bank_account/create`
**/
public class ProcessorStripeBankAccountTokenCreateRequest {
    @JsonProperty("access_token")
    public String accessToken;
    public ProcessorStripeBankAccountTokenCreateRequest withAccessToken(String accessToken) {
        this.accessToken = accessToken;
        return this;
    }
    @JsonProperty("account_id")
    public String accountId;
    public ProcessorStripeBankAccountTokenCreateRequest withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("client_id")
    public String clientId;
    public ProcessorStripeBankAccountTokenCreateRequest withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secret")
    public String secret;
    public ProcessorStripeBankAccountTokenCreateRequest withSecret(String secret) {
        this.secret = secret;
        return this;
    }
}