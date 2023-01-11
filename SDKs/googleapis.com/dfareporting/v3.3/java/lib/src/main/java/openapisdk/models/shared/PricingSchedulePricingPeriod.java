package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PricingSchedulePricingPeriod
 * Pricing Period
**/
public class PricingSchedulePricingPeriod {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endDate")
    public LocalDate endDate;
    public PricingSchedulePricingPeriod withEndDate(LocalDate endDate) {
        this.endDate = endDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pricingComment")
    public String pricingComment;
    public PricingSchedulePricingPeriod withPricingComment(String pricingComment) {
        this.pricingComment = pricingComment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rateOrCostNanos")
    public String rateOrCostNanos;
    public PricingSchedulePricingPeriod withRateOrCostNanos(String rateOrCostNanos) {
        this.rateOrCostNanos = rateOrCostNanos;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startDate")
    public LocalDate startDate;
    public PricingSchedulePricingPeriod withStartDate(LocalDate startDate) {
        this.startDate = startDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("units")
    public String units;
    public PricingSchedulePricingPeriod withUnits(String units) {
        this.units = units;
        return this;
    }
}