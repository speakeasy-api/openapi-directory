package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BookingBook200ApplicationJsonDataItemSummariesMerchantTermsAndConditionsCancellationFromTourDate {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dayRangeMax")
    public Long dayRangeMax;
    public BookingBook200ApplicationJsonDataItemSummariesMerchantTermsAndConditionsCancellationFromTourDate withDayRangeMax(Long dayRangeMax) {
        this.dayRangeMax = dayRangeMax;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dayRangeMin")
    public Long dayRangeMin;
    public BookingBook200ApplicationJsonDataItemSummariesMerchantTermsAndConditionsCancellationFromTourDate withDayRangeMin(Long dayRangeMin) {
        this.dayRangeMin = dayRangeMin;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("percentageRefundable")
    public Long percentageRefundable;
    public BookingBook200ApplicationJsonDataItemSummariesMerchantTermsAndConditionsCancellationFromTourDate withPercentageRefundable(Long percentageRefundable) {
        this.percentageRefundable = percentageRefundable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("policyEndTimestamp")
    public Long policyEndTimestamp;
    public BookingBook200ApplicationJsonDataItemSummariesMerchantTermsAndConditionsCancellationFromTourDate withPolicyEndTimestamp(Long policyEndTimestamp) {
        this.policyEndTimestamp = policyEndTimestamp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("policyStartTimestamp")
    public Long policyStartTimestamp;
    public BookingBook200ApplicationJsonDataItemSummariesMerchantTermsAndConditionsCancellationFromTourDate withPolicyStartTimestamp(Long policyStartTimestamp) {
        this.policyStartTimestamp = policyStartTimestamp;
        return this;
    }
}