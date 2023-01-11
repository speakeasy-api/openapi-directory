package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BankTransferBalanceGetRequest
 * BankTransferBalanceGetRequest defines the request schema for `/bank_transfer/balance/get`
**/
public class BankTransferBalanceGetRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("client_id")
    public String clientId;
    public BankTransferBalanceGetRequest withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("origination_account_id")
    public String originationAccountId;
    public BankTransferBalanceGetRequest withOriginationAccountId(String originationAccountId) {
        this.originationAccountId = originationAccountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secret")
    public String secret;
    public BankTransferBalanceGetRequest withSecret(String secret) {
        this.secret = secret;
        return this;
    }
}