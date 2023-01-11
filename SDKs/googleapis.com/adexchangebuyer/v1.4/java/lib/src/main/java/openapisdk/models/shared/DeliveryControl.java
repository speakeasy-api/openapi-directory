package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DeliveryControl {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creativeBlockingLevel")
    public String creativeBlockingLevel;
    public DeliveryControl withCreativeBlockingLevel(String creativeBlockingLevel) {
        this.creativeBlockingLevel = creativeBlockingLevel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deliveryRateType")
    public String deliveryRateType;
    public DeliveryControl withDeliveryRateType(String deliveryRateType) {
        this.deliveryRateType = deliveryRateType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("frequencyCaps")
    public DeliveryControlFrequencyCap[] frequencyCaps;
    public DeliveryControl withFrequencyCaps(DeliveryControlFrequencyCap[] frequencyCaps) {
        this.frequencyCaps = frequencyCaps;
        return this;
    }
}