package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PricingSchedule
 * Pricing Schedule
**/
public class PricingSchedule {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("capCostOption")
    public PricingScheduleCapCostOptionEnum capCostOption;
    public PricingSchedule withCapCostOption(PricingScheduleCapCostOptionEnum capCostOption) {
        this.capCostOption = capCostOption;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endDate")
    public LocalDate endDate;
    public PricingSchedule withEndDate(LocalDate endDate) {
        this.endDate = endDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("flighted")
    public Boolean flighted;
    public PricingSchedule withFlighted(Boolean flighted) {
        this.flighted = flighted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("floodlightActivityId")
    public String floodlightActivityId;
    public PricingSchedule withFloodlightActivityId(String floodlightActivityId) {
        this.floodlightActivityId = floodlightActivityId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pricingPeriods")
    public PricingSchedulePricingPeriod[] pricingPeriods;
    public PricingSchedule withPricingPeriods(PricingSchedulePricingPeriod[] pricingPeriods) {
        this.pricingPeriods = pricingPeriods;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pricingType")
    public PricingSchedulePricingTypeEnum pricingType;
    public PricingSchedule withPricingType(PricingSchedulePricingTypeEnum pricingType) {
        this.pricingType = pricingType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startDate")
    public LocalDate startDate;
    public PricingSchedule withStartDate(LocalDate startDate) {
        this.startDate = startDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("testingStartDate")
    public LocalDate testingStartDate;
    public PricingSchedule withTestingStartDate(LocalDate testingStartDate) {
        this.testingStartDate = testingStartDate;
        return this;
    }
}