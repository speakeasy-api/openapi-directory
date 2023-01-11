package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * TransactionResourceAttributesRoundUp
 * Provides information about how a Round Up was applied, such as whether or
 * not a boost was included in the Round Up.
 * 
**/
public class TransactionResourceAttributesRoundUp {
    @JsonProperty("amount")
    public MoneyObject amount;
    public TransactionResourceAttributesRoundUp withAmount(MoneyObject amount) {
        this.amount = amount;
        return this;
    }
    @JsonProperty("boostPortion")
    public TransactionResourceAttributesRoundUpBoostPortion boostPortion;
    public TransactionResourceAttributesRoundUp withBoostPortion(TransactionResourceAttributesRoundUpBoostPortion boostPortion) {
        this.boostPortion = boostPortion;
        return this;
    }
}