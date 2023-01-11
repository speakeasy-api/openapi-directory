package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DeliveryControl
 * Message contains details about how the deals will be paced.
**/
public class DeliveryControl {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creativeBlockingLevel")
    public DeliveryControlCreativeBlockingLevelEnum creativeBlockingLevel;
    public DeliveryControl withCreativeBlockingLevel(DeliveryControlCreativeBlockingLevelEnum creativeBlockingLevel) {
        this.creativeBlockingLevel = creativeBlockingLevel;
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
    @JsonProperty("frequencyCaps")
    public FrequencyCap[] frequencyCaps;
    public DeliveryControl withFrequencyCaps(FrequencyCap[] frequencyCaps) {
        this.frequencyCaps = frequencyCaps;
        return this;
    }
}