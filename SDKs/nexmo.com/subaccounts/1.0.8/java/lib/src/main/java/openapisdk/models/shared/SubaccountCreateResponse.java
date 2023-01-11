package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SubaccountCreateResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("api_key")
    public String apiKey;
    public SubaccountCreateResponse withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("balance")
    public Double balance;
    public SubaccountCreateResponse withBalance(Double balance) {
        this.balance = balance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("created_at")
    public String createdAt;
    public SubaccountCreateResponse withCreatedAt(String createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("credit_limit")
    public Double creditLimit;
    public SubaccountCreateResponse withCreditLimit(Double creditLimit) {
        this.creditLimit = creditLimit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public SubaccountCreateResponse withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("primary_account_api_key")
    public String primaryAccountApiKey;
    public SubaccountCreateResponse withPrimaryAccountApiKey(String primaryAccountApiKey) {
        this.primaryAccountApiKey = primaryAccountApiKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secret")
    public String secret;
    public SubaccountCreateResponse withSecret(String secret) {
        this.secret = secret;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("suspended")
    public Boolean suspended;
    public SubaccountCreateResponse withSuspended(Boolean suspended) {
        this.suspended = suspended;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("use_primary_account_balance")
    public Boolean usePrimaryAccountBalance;
    public SubaccountCreateResponse withUsePrimaryAccountBalance(Boolean usePrimaryAccountBalance) {
        this.usePrimaryAccountBalance = usePrimaryAccountBalance;
        return this;
    }
}