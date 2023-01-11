package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleFirebaseFcmDataV1beta1MessageOutcomePercents
 * Percentage breakdown of message delivery outcomes. These categories are mutually exclusive. All percentages are calculated with countMessagesAccepted as the denominator. These categories may not account for all message outcomes.
**/
public class GoogleFirebaseFcmDataV1beta1MessageOutcomePercents {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("delivered")
    public Float delivered;
    public GoogleFirebaseFcmDataV1beta1MessageOutcomePercents withDelivered(Float delivered) {
        this.delivered = delivered;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("droppedAppForceStopped")
    public Float droppedAppForceStopped;
    public GoogleFirebaseFcmDataV1beta1MessageOutcomePercents withDroppedAppForceStopped(Float droppedAppForceStopped) {
        this.droppedAppForceStopped = droppedAppForceStopped;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("droppedDeviceInactive")
    public Float droppedDeviceInactive;
    public GoogleFirebaseFcmDataV1beta1MessageOutcomePercents withDroppedDeviceInactive(Float droppedDeviceInactive) {
        this.droppedDeviceInactive = droppedDeviceInactive;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("droppedTooManyPendingMessages")
    public Float droppedTooManyPendingMessages;
    public GoogleFirebaseFcmDataV1beta1MessageOutcomePercents withDroppedTooManyPendingMessages(Float droppedTooManyPendingMessages) {
        this.droppedTooManyPendingMessages = droppedTooManyPendingMessages;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pending")
    public Float pending;
    public GoogleFirebaseFcmDataV1beta1MessageOutcomePercents withPending(Float pending) {
        this.pending = pending;
        return this;
    }
}