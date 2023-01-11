package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudPaymentsResellerSubscriptionV1Duration
 * Describes the length of a period of a time.
**/
public class GoogleCloudPaymentsResellerSubscriptionV1Duration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("count")
    public Integer count;
    public GoogleCloudPaymentsResellerSubscriptionV1Duration withCount(Integer count) {
        this.count = count;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unit")
    public GoogleCloudPaymentsResellerSubscriptionV1DurationUnitEnum unit;
    public GoogleCloudPaymentsResellerSubscriptionV1Duration withUnit(GoogleCloudPaymentsResellerSubscriptionV1DurationUnitEnum unit) {
        this.unit = unit;
        return this;
    }
}