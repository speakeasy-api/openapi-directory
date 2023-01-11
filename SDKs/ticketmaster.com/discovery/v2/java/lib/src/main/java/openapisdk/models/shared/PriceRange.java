package openapisdk.models.shared;



/**
 * PriceRange
 * PriceRange
**/
public class PriceRange {
    public String currency;
    public PriceRange withCurrency(String currency) {
        this.currency = currency;
        return this;
    }
    public Double max;
    public PriceRange withMax(Double max) {
        this.max = max;
        return this;
    }
    public Double min;
    public PriceRange withMin(Double min) {
        this.min = min;
        return this;
    }
    public PriceRangeTypeEnum type;
    public PriceRange withType(PriceRangeTypeEnum type) {
        this.type = type;
        return this;
    }
}