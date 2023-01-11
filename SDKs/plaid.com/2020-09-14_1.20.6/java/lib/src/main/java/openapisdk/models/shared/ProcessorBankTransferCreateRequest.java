package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ProcessorBankTransferCreateRequest
 * ProcessorBankTransferCreateRequest defines the request schema for `/processor/bank_transfer/create`
**/
public class ProcessorBankTransferCreateRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ach_class")
    public AchClassEnum achClass;
    public ProcessorBankTransferCreateRequest withAchClass(AchClassEnum achClass) {
        this.achClass = achClass;
        return this;
    }
    @JsonProperty("amount")
    public String amount;
    public ProcessorBankTransferCreateRequest withAmount(String amount) {
        this.amount = amount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("client_id")
    public String clientId;
    public ProcessorBankTransferCreateRequest withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("custom_tag")
    public String customTag;
    public ProcessorBankTransferCreateRequest withCustomTag(String customTag) {
        this.customTag = customTag;
        return this;
    }
    @JsonProperty("description")
    public String description;
    public ProcessorBankTransferCreateRequest withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("idempotency_key")
    public String idempotencyKey;
    public ProcessorBankTransferCreateRequest withIdempotencyKey(String idempotencyKey) {
        this.idempotencyKey = idempotencyKey;
        return this;
    }
    @JsonProperty("iso_currency_code")
    public String isoCurrencyCode;
    public ProcessorBankTransferCreateRequest withIsoCurrencyCode(String isoCurrencyCode) {
        this.isoCurrencyCode = isoCurrencyCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metadata")
    public java.util.Map<String, String> metadata;
    public ProcessorBankTransferCreateRequest withMetadata(java.util.Map<String, String> metadata) {
        this.metadata = metadata;
        return this;
    }
    @JsonProperty("network")
    public BankTransferNetworkEnum network;
    public ProcessorBankTransferCreateRequest withNetwork(BankTransferNetworkEnum network) {
        this.network = network;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("origination_account_id")
    public String originationAccountId;
    public ProcessorBankTransferCreateRequest withOriginationAccountId(String originationAccountId) {
        this.originationAccountId = originationAccountId;
        return this;
    }
    @JsonProperty("processor_token")
    public String processorToken;
    public ProcessorBankTransferCreateRequest withProcessorToken(String processorToken) {
        this.processorToken = processorToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secret")
    public String secret;
    public ProcessorBankTransferCreateRequest withSecret(String secret) {
        this.secret = secret;
        return this;
    }
    @JsonProperty("type")
    public BankTransferTypeEnum type;
    public ProcessorBankTransferCreateRequest withType(BankTransferTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonProperty("user")
    public java.util.Map<String, Object> user;
    public ProcessorBankTransferCreateRequest withUser(java.util.Map<String, Object> user) {
        this.user = user;
        return this;
    }
}