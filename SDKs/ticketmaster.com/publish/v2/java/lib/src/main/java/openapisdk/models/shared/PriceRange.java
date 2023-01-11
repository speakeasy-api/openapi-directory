package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PriceRange
 * PriceRange
**/
public class PriceRange {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currency")
    public String currency;
    public PriceRange withCurrency(String currency) {
        this.currency = currency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("max")
    public Double max;
    public PriceRange withMax(Double max) {
        this.max = max;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("min")
    public Double min;
    public PriceRange withMin(Double min) {
        this.min = min;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public PriceRangeTypeEnum type;
    public PriceRange withType(PriceRangeTypeEnum type) {
        this.type = type;
        return this;
    }
}