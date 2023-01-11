package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GoogleCloudPaymentsResellerSubscriptionV1ExtendSubscriptionResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cycleEndTime")
    public String cycleEndTime;
    public GoogleCloudPaymentsResellerSubscriptionV1ExtendSubscriptionResponse withCycleEndTime(String cycleEndTime) {
        this.cycleEndTime = cycleEndTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("freeTrialEndTime")
    public String freeTrialEndTime;
    public GoogleCloudPaymentsResellerSubscriptionV1ExtendSubscriptionResponse withFreeTrialEndTime(String freeTrialEndTime) {
        this.freeTrialEndTime = freeTrialEndTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("renewalTime")
    public String renewalTime;
    public GoogleCloudPaymentsResellerSubscriptionV1ExtendSubscriptionResponse withRenewalTime(String renewalTime) {
        this.renewalTime = renewalTime;
        return this;
    }
}