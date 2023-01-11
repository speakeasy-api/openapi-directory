package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * TransactionResourceAttributesHoldInfoForeignAmount
 * Provides information about a value of money.
 * 
**/
public class TransactionResourceAttributesHoldInfoForeignAmount {
    @JsonProperty("currencyCode")
    public String currencyCode;
    public TransactionResourceAttributesHoldInfoForeignAmount withCurrencyCode(String currencyCode) {
        this.currencyCode = currencyCode;
        return this;
    }
    @JsonProperty("value")
    public String value;
    public TransactionResourceAttributesHoldInfoForeignAmount withValue(String value) {
        this.value = value;
        return this;
    }
    @JsonProperty("valueInBaseUnits")
    public Long valueInBaseUnits;
    public TransactionResourceAttributesHoldInfoForeignAmount withValueInBaseUnits(Long valueInBaseUnits) {
        this.valueInBaseUnits = valueInBaseUnits;
        return this;
    }
}