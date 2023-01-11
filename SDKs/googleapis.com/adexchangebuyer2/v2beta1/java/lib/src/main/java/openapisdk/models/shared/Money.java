package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Money
 * Represents an amount of money with its currency type.
**/
public class Money {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currencyCode")
    public String currencyCode;
    public Money withCurrencyCode(String currencyCode) {
        this.currencyCode = currencyCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nanos")
    public Integer nanos;
    public Money withNanos(Integer nanos) {
        this.nanos = nanos;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("units")
    public String units;
    public Money withUnits(String units) {
        this.units = units;
        return this;
    }
}