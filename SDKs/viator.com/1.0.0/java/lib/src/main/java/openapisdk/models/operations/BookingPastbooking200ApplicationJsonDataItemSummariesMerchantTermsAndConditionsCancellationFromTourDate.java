package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BookingPastbooking200ApplicationJsonDataItemSummariesMerchantTermsAndConditionsCancellationFromTourDate {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dayRangeMax")
    public Long dayRangeMax;
    public BookingPastbooking200ApplicationJsonDataItemSummariesMerchantTermsAndConditionsCancellationFromTourDate withDayRangeMax(Long dayRangeMax) {
        this.dayRangeMax = dayRangeMax;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dayRangeMin")
    public Long dayRangeMin;
    public BookingPastbooking200ApplicationJsonDataItemSummariesMerchantTermsAndConditionsCancellationFromTourDate withDayRangeMin(Long dayRangeMin) {
        this.dayRangeMin = dayRangeMin;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("percentageRefundable")
    public Long percentageRefundable;
    public BookingPastbooking200ApplicationJsonDataItemSummariesMerchantTermsAndConditionsCancellationFromTourDate withPercentageRefundable(Long percentageRefundable) {
        this.percentageRefundable = percentageRefundable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("policyEndTimestamp")
    public Long policyEndTimestamp;
    public BookingPastbooking200ApplicationJsonDataItemSummariesMerchantTermsAndConditionsCancellationFromTourDate withPolicyEndTimestamp(Long policyEndTimestamp) {
        this.policyEndTimestamp = policyEndTimestamp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("policyStartTimestamp")
    public Long policyStartTimestamp;
    public BookingPastbooking200ApplicationJsonDataItemSummariesMerchantTermsAndConditionsCancellationFromTourDate withPolicyStartTimestamp(Long policyStartTimestamp) {
        this.policyStartTimestamp = policyStartTimestamp;
        return this;
    }
}