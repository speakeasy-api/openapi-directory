package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetPayoutStatistics {
    @JsonProperty("thisMonthFailedPaymentsCount")
    public Long thisMonthFailedPaymentsCount;
    public GetPayoutStatistics withThisMonthFailedPaymentsCount(Long thisMonthFailedPaymentsCount) {
        this.thisMonthFailedPaymentsCount = thisMonthFailedPaymentsCount;
        return this;
    }
    @JsonProperty("thisMonthPayoutsCount")
    public Long thisMonthPayoutsCount;
    public GetPayoutStatistics withThisMonthPayoutsCount(Long thisMonthPayoutsCount) {
        this.thisMonthPayoutsCount = thisMonthPayoutsCount;
        return this;
    }
}