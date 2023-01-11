package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class TransactionResourceAttributes {
    @JsonProperty("amount")
    public MoneyObject amount;
    public TransactionResourceAttributes withAmount(MoneyObject amount) {
        this.amount = amount;
        return this;
    }
    @JsonProperty("cashback")
    public TransactionResourceAttributesCashback cashback;
    public TransactionResourceAttributes withCashback(TransactionResourceAttributesCashback cashback) {
        this.cashback = cashback;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("createdAt")
    public OffsetDateTime createdAt;
    public TransactionResourceAttributes withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonProperty("description")
    public String description;
    public TransactionResourceAttributes withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("foreignAmount")
    public TransactionResourceAttributesForeignAmount foreignAmount;
    public TransactionResourceAttributes withForeignAmount(TransactionResourceAttributesForeignAmount foreignAmount) {
        this.foreignAmount = foreignAmount;
        return this;
    }
    @JsonProperty("holdInfo")
    public TransactionResourceAttributesHoldInfo holdInfo;
    public TransactionResourceAttributes withHoldInfo(TransactionResourceAttributesHoldInfo holdInfo) {
        this.holdInfo = holdInfo;
        return this;
    }
    @JsonProperty("message")
    public String message;
    public TransactionResourceAttributes withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonProperty("rawText")
    public String rawText;
    public TransactionResourceAttributes withRawText(String rawText) {
        this.rawText = rawText;
        return this;
    }
    @JsonProperty("roundUp")
    public TransactionResourceAttributesRoundUp roundUp;
    public TransactionResourceAttributes withRoundUp(TransactionResourceAttributesRoundUp roundUp) {
        this.roundUp = roundUp;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("settledAt")
    public OffsetDateTime settledAt;
    public TransactionResourceAttributes withSettledAt(OffsetDateTime settledAt) {
        this.settledAt = settledAt;
        return this;
    }
    @JsonProperty("status")
    public Object status;
    public TransactionResourceAttributes withStatus(Object status) {
        this.status = status;
        return this;
    }
}