package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BookingPricingmatrix200ApplicationJsonDataAgeBandPrices {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bandId")
    public Long bandId;
    public BookingPricingmatrix200ApplicationJsonDataAgeBandPrices withBandId(Long bandId) {
        this.bandId = bandId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maximumCountRequired")
    public Long maximumCountRequired;
    public BookingPricingmatrix200ApplicationJsonDataAgeBandPrices withMaximumCountRequired(Long maximumCountRequired) {
        this.maximumCountRequired = maximumCountRequired;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minimumCountRequired")
    public Long minimumCountRequired;
    public BookingPricingmatrix200ApplicationJsonDataAgeBandPrices withMinimumCountRequired(Long minimumCountRequired) {
        this.minimumCountRequired = minimumCountRequired;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("prices")
    public BookingPricingmatrix200ApplicationJsonDataAgeBandPricesPrices[] prices;
    public BookingPricingmatrix200ApplicationJsonDataAgeBandPrices withPrices(BookingPricingmatrix200ApplicationJsonDataAgeBandPricesPrices[] prices) {
        this.prices = prices;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sortOrder")
    public Long sortOrder;
    public BookingPricingmatrix200ApplicationJsonDataAgeBandPrices withSortOrder(Long sortOrder) {
        this.sortOrder = sortOrder;
        return this;
    }
}