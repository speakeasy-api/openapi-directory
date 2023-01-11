package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudPaymentsResellerSubscriptionV1ServicePeriod
 * A description of what time period or moment in time the product or service is being delivered over.
**/
public class GoogleCloudPaymentsResellerSubscriptionV1ServicePeriod {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endTime")
    public String endTime;
    public GoogleCloudPaymentsResellerSubscriptionV1ServicePeriod withEndTime(String endTime) {
        this.endTime = endTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startTime")
    public String startTime;
    public GoogleCloudPaymentsResellerSubscriptionV1ServicePeriod withStartTime(String startTime) {
        this.startTime = startTime;
        return this;
    }
}