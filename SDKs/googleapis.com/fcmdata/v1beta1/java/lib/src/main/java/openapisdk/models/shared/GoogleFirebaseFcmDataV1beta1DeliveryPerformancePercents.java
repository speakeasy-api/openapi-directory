package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleFirebaseFcmDataV1beta1DeliveryPerformancePercents
 * Overview of delivery performance for messages that were successfully delivered. All percentages are calculated with countMessagesAccepted as the denominator. These categories are not mutually exclusive; a message can be delayed for multiple reasons.
**/
public class GoogleFirebaseFcmDataV1beta1DeliveryPerformancePercents {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("delayedDeviceDoze")
    public Float delayedDeviceDoze;
    public GoogleFirebaseFcmDataV1beta1DeliveryPerformancePercents withDelayedDeviceDoze(Float delayedDeviceDoze) {
        this.delayedDeviceDoze = delayedDeviceDoze;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("delayedDeviceOffline")
    public Float delayedDeviceOffline;
    public GoogleFirebaseFcmDataV1beta1DeliveryPerformancePercents withDelayedDeviceOffline(Float delayedDeviceOffline) {
        this.delayedDeviceOffline = delayedDeviceOffline;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("delayedMessageThrottled")
    public Float delayedMessageThrottled;
    public GoogleFirebaseFcmDataV1beta1DeliveryPerformancePercents withDelayedMessageThrottled(Float delayedMessageThrottled) {
        this.delayedMessageThrottled = delayedMessageThrottled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("delayedUserStopped")
    public Float delayedUserStopped;
    public GoogleFirebaseFcmDataV1beta1DeliveryPerformancePercents withDelayedUserStopped(Float delayedUserStopped) {
        this.delayedUserStopped = delayedUserStopped;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deliveredNoDelay")
    public Float deliveredNoDelay;
    public GoogleFirebaseFcmDataV1beta1DeliveryPerformancePercents withDeliveredNoDelay(Float deliveredNoDelay) {
        this.deliveredNoDelay = deliveredNoDelay;
        return this;
    }
}