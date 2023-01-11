package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * TransactionResourceAttributesForeignAmount
 * Provides information about a value of money.
 * 
**/
public class TransactionResourceAttributesForeignAmount {
    @JsonProperty("currencyCode")
    public String currencyCode;
    public TransactionResourceAttributesForeignAmount withCurrencyCode(String currencyCode) {
        this.currencyCode = currencyCode;
        return this;
    }
    @JsonProperty("value")
    public String value;
    public TransactionResourceAttributesForeignAmount withValue(String value) {
        this.value = value;
        return this;
    }
    @JsonProperty("valueInBaseUnits")
    public Long valueInBaseUnits;
    public TransactionResourceAttributesForeignAmount withValueInBaseUnits(Long valueInBaseUnits) {
        this.valueInBaseUnits = valueInBaseUnits;
        return this;
    }
}