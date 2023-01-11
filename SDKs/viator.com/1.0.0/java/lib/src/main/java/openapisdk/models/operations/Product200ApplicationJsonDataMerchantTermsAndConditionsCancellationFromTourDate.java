package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Product200ApplicationJsonDataMerchantTermsAndConditionsCancellationFromTourDate {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dayRangeMax")
    public Long dayRangeMax;
    public Product200ApplicationJsonDataMerchantTermsAndConditionsCancellationFromTourDate withDayRangeMax(Long dayRangeMax) {
        this.dayRangeMax = dayRangeMax;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dayRangeMin")
    public Long dayRangeMin;
    public Product200ApplicationJsonDataMerchantTermsAndConditionsCancellationFromTourDate withDayRangeMin(Long dayRangeMin) {
        this.dayRangeMin = dayRangeMin;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("percentageRefundable")
    public Long percentageRefundable;
    public Product200ApplicationJsonDataMerchantTermsAndConditionsCancellationFromTourDate withPercentageRefundable(Long percentageRefundable) {
        this.percentageRefundable = percentageRefundable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("policyEndTimestamp")
    public Long policyEndTimestamp;
    public Product200ApplicationJsonDataMerchantTermsAndConditionsCancellationFromTourDate withPolicyEndTimestamp(Long policyEndTimestamp) {
        this.policyEndTimestamp = policyEndTimestamp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("policyStartTimestamp")
    public Long policyStartTimestamp;
    public Product200ApplicationJsonDataMerchantTermsAndConditionsCancellationFromTourDate withPolicyStartTimestamp(Long policyStartTimestamp) {
        this.policyStartTimestamp = policyStartTimestamp;
        return this;
    }
}