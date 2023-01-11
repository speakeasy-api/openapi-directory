package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * TransactionResourceAttributesRoundUpBoostPortion
 * Provides information about a value of money.
 * 
**/
public class TransactionResourceAttributesRoundUpBoostPortion {
    @JsonProperty("currencyCode")
    public String currencyCode;
    public TransactionResourceAttributesRoundUpBoostPortion withCurrencyCode(String currencyCode) {
        this.currencyCode = currencyCode;
        return this;
    }
    @JsonProperty("value")
    public String value;
    public TransactionResourceAttributesRoundUpBoostPortion withValue(String value) {
        this.value = value;
        return this;
    }
    @JsonProperty("valueInBaseUnits")
    public Long valueInBaseUnits;
    public TransactionResourceAttributesRoundUpBoostPortion withValueInBaseUnits(Long valueInBaseUnits) {
        this.valueInBaseUnits = valueInBaseUnits;
        return this;
    }
}