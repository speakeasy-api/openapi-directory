package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * MoneyObject
 * Provides information about a value of money.
 * 
**/
public class MoneyObject {
    @JsonProperty("currencyCode")
    public String currencyCode;
    public MoneyObject withCurrencyCode(String currencyCode) {
        this.currencyCode = currencyCode;
        return this;
    }
    @JsonProperty("value")
    public String value;
    public MoneyObject withValue(String value) {
        this.value = value;
        return this;
    }
    @JsonProperty("valueInBaseUnits")
    public Long valueInBaseUnits;
    public MoneyObject withValueInBaseUnits(Long valueInBaseUnits) {
        this.valueInBaseUnits = valueInBaseUnits;
        return this;
    }
}