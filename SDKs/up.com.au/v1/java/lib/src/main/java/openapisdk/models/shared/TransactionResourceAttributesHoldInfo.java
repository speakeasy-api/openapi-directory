package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * TransactionResourceAttributesHoldInfo
 * Provides information about the amount at which a transaction was in the
 * `HELD` status.
 * 
**/
public class TransactionResourceAttributesHoldInfo {
    @JsonProperty("amount")
    public MoneyObject amount;
    public TransactionResourceAttributesHoldInfo withAmount(MoneyObject amount) {
        this.amount = amount;
        return this;
    }
    @JsonProperty("foreignAmount")
    public TransactionResourceAttributesHoldInfoForeignAmount foreignAmount;
    public TransactionResourceAttributesHoldInfo withForeignAmount(TransactionResourceAttributesHoldInfoForeignAmount foreignAmount) {
        this.foreignAmount = foreignAmount;
        return this;
    }
}