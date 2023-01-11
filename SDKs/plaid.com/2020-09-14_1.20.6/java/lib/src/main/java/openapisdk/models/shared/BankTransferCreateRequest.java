package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BankTransferCreateRequest
 * BankTransferCreateRequest defines the request schema for `/bank_transfer/create`
**/
public class BankTransferCreateRequest {
    @JsonProperty("access_token")
    public String accessToken;
    public BankTransferCreateRequest withAccessToken(String accessToken) {
        this.accessToken = accessToken;
        return this;
    }
    @JsonProperty("account_id")
    public String accountId;
    public BankTransferCreateRequest withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ach_class")
    public AchClassEnum achClass;
    public BankTransferCreateRequest withAchClass(AchClassEnum achClass) {
        this.achClass = achClass;
        return this;
    }
    @JsonProperty("amount")
    public String amount;
    public BankTransferCreateRequest withAmount(String amount) {
        this.amount = amount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("client_id")
    public String clientId;
    public BankTransferCreateRequest withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("custom_tag")
    public String customTag;
    public BankTransferCreateRequest withCustomTag(String customTag) {
        this.customTag = customTag;
        return this;
    }
    @JsonProperty("description")
    public String description;
    public BankTransferCreateRequest withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("idempotency_key")
    public String idempotencyKey;
    public BankTransferCreateRequest withIdempotencyKey(String idempotencyKey) {
        this.idempotencyKey = idempotencyKey;
        return this;
    }
    @JsonProperty("iso_currency_code")
    public String isoCurrencyCode;
    public BankTransferCreateRequest withIsoCurrencyCode(String isoCurrencyCode) {
        this.isoCurrencyCode = isoCurrencyCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metadata")
    public java.util.Map<String, String> metadata;
    public BankTransferCreateRequest withMetadata(java.util.Map<String, String> metadata) {
        this.metadata = metadata;
        return this;
    }
    @JsonProperty("network")
    public BankTransferNetworkEnum network;
    public BankTransferCreateRequest withNetwork(BankTransferNetworkEnum network) {
        this.network = network;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("origination_account_id")
    public String originationAccountId;
    public BankTransferCreateRequest withOriginationAccountId(String originationAccountId) {
        this.originationAccountId = originationAccountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secret")
    public String secret;
    public BankTransferCreateRequest withSecret(String secret) {
        this.secret = secret;
        return this;
    }
    @JsonProperty("type")
    public BankTransferTypeEnum type;
    public BankTransferCreateRequest withType(BankTransferTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonProperty("user")
    public java.util.Map<String, Object> user;
    public BankTransferCreateRequest withUser(java.util.Map<String, Object> user) {
        this.user = user;
        return this;
    }
}