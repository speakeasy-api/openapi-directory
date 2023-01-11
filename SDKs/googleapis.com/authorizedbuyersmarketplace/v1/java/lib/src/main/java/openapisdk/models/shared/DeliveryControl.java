package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DeliveryControl
 * Message contains details about how the deal will be paced.
**/
public class DeliveryControl {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("companionDeliveryType")
    public DeliveryControlCompanionDeliveryTypeEnum companionDeliveryType;
    public DeliveryControl withCompanionDeliveryType(DeliveryControlCompanionDeliveryTypeEnum companionDeliveryType) {
        this.companionDeliveryType = companionDeliveryType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creativeRotationType")
    public DeliveryControlCreativeRotationTypeEnum creativeRotationType;
    public DeliveryControl withCreativeRotationType(DeliveryControlCreativeRotationTypeEnum creativeRotationType) {
        this.creativeRotationType = creativeRotationType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deliveryRateType")
    public DeliveryControlDeliveryRateTypeEnum deliveryRateType;
    public DeliveryControl withDeliveryRateType(DeliveryControlDeliveryRateTypeEnum deliveryRateType) {
        this.deliveryRateType = deliveryRateType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("frequencyCap")
    public FrequencyCap[] frequencyCap;
    public DeliveryControl withFrequencyCap(FrequencyCap[] frequencyCap) {
        this.frequencyCap = frequencyCap;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("roadblockingType")
    public DeliveryControlRoadblockingTypeEnum roadblockingType;
    public DeliveryControl withRoadblockingType(DeliveryControlRoadblockingTypeEnum roadblockingType) {
        this.roadblockingType = roadblockingType;
        return this;
    }
}