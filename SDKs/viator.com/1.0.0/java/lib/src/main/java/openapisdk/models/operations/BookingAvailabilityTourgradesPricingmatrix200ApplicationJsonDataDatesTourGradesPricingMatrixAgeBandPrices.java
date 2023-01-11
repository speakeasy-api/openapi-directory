package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BookingAvailabilityTourgradesPricingmatrix200ApplicationJsonDataDatesTourGradesPricingMatrixAgeBandPrices {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bandId")
    public Long bandId;
    public BookingAvailabilityTourgradesPricingmatrix200ApplicationJsonDataDatesTourGradesPricingMatrixAgeBandPrices withBandId(Long bandId) {
        this.bandId = bandId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maximumCountRequired")
    public Long maximumCountRequired;
    public BookingAvailabilityTourgradesPricingmatrix200ApplicationJsonDataDatesTourGradesPricingMatrixAgeBandPrices withMaximumCountRequired(Long maximumCountRequired) {
        this.maximumCountRequired = maximumCountRequired;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minimumCountRequired")
    public Long minimumCountRequired;
    public BookingAvailabilityTourgradesPricingmatrix200ApplicationJsonDataDatesTourGradesPricingMatrixAgeBandPrices withMinimumCountRequired(Long minimumCountRequired) {
        this.minimumCountRequired = minimumCountRequired;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("prices")
    public BookingAvailabilityTourgradesPricingmatrix200ApplicationJsonDataDatesTourGradesPricingMatrixAgeBandPricesPrices[] prices;
    public BookingAvailabilityTourgradesPricingmatrix200ApplicationJsonDataDatesTourGradesPricingMatrixAgeBandPrices withPrices(BookingAvailabilityTourgradesPricingmatrix200ApplicationJsonDataDatesTourGradesPricingMatrixAgeBandPricesPrices[] prices) {
        this.prices = prices;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sortOrder")
    public Long sortOrder;
    public BookingAvailabilityTourgradesPricingmatrix200ApplicationJsonDataDatesTourGradesPricingMatrixAgeBandPrices withSortOrder(Long sortOrder) {
        this.sortOrder = sortOrder;
        return this;
    }
}