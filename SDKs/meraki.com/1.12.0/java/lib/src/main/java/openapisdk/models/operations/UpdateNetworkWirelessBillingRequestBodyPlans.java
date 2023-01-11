package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateNetworkWirelessBillingRequestBodyPlans {
    @JsonProperty("bandwidthLimits")
    public UpdateNetworkWirelessBillingRequestBodyPlansBandwidthLimits bandwidthLimits;
    public UpdateNetworkWirelessBillingRequestBodyPlans withBandwidthLimits(UpdateNetworkWirelessBillingRequestBodyPlansBandwidthLimits bandwidthLimits) {
        this.bandwidthLimits = bandwidthLimits;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public UpdateNetworkWirelessBillingRequestBodyPlans withId(String id) {
        this.id = id;
        return this;
    }
    @JsonProperty("price")
    public Float price;
    public UpdateNetworkWirelessBillingRequestBodyPlans withPrice(Float price) {
        this.price = price;
        return this;
    }
    @JsonProperty("timeLimit")
    public UpdateNetworkWirelessBillingRequestBodyPlansTimeLimitEnum timeLimit;
    public UpdateNetworkWirelessBillingRequestBodyPlans withTimeLimit(UpdateNetworkWirelessBillingRequestBodyPlansTimeLimitEnum timeLimit) {
        this.timeLimit = timeLimit;
        return this;
    }
}