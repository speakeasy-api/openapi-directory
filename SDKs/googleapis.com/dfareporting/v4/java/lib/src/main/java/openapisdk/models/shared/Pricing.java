package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Pricing
 * Pricing Information
**/
public class Pricing {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("capCostType")
    public PricingCapCostTypeEnum capCostType;
    public Pricing withCapCostType(PricingCapCostTypeEnum capCostType) {
        this.capCostType = capCostType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endDate")
    public LocalDate endDate;
    public Pricing withEndDate(LocalDate endDate) {
        this.endDate = endDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("flights")
    public Flight[] flights;
    public Pricing withFlights(Flight[] flights) {
        this.flights = flights;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("groupType")
    public PricingGroupTypeEnum groupType;
    public Pricing withGroupType(PricingGroupTypeEnum groupType) {
        this.groupType = groupType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pricingType")
    public PricingPricingTypeEnum pricingType;
    public Pricing withPricingType(PricingPricingTypeEnum pricingType) {
        this.pricingType = pricingType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startDate")
    public LocalDate startDate;
    public Pricing withStartDate(LocalDate startDate) {
        this.startDate = startDate;
        return this;
    }
}