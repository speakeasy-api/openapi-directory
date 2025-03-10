/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DeliveryControl - Message contains details about how the deal will be paced.
 */
public class DeliveryControl {
    /**
     * Output only. Specifies roadblocking in a main companion lineitem.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("companionDeliveryType")
    public DeliveryControlCompanionDeliveryTypeEnum companionDeliveryType;

    public DeliveryControl withCompanionDeliveryType(DeliveryControlCompanionDeliveryTypeEnum companionDeliveryType) {
        this.companionDeliveryType = companionDeliveryType;
        return this;
    }
    
    /**
     * Output only. Specifies strategy to use for selecting a creative when multiple creatives of the same size are available.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creativeRotationType")
    public DeliveryControlCreativeRotationTypeEnum creativeRotationType;

    public DeliveryControl withCreativeRotationType(DeliveryControlCreativeRotationTypeEnum creativeRotationType) {
        this.creativeRotationType = creativeRotationType;
        return this;
    }
    
    /**
     * Output only. Specifies how the impression delivery will be paced.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deliveryRateType")
    public DeliveryControlDeliveryRateTypeEnum deliveryRateType;

    public DeliveryControl withDeliveryRateType(DeliveryControlDeliveryRateTypeEnum deliveryRateType) {
        this.deliveryRateType = deliveryRateType;
        return this;
    }
    
    /**
     * Output only. Specifies any frequency caps. Cannot be filtered within ListDealsRequest.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("frequencyCap")
    public FrequencyCap[] frequencyCap;

    public DeliveryControl withFrequencyCap(FrequencyCap[] frequencyCap) {
        this.frequencyCap = frequencyCap;
        return this;
    }
    
    /**
     * Output only. Specifies the roadblocking type in display creatives.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("roadblockingType")
    public DeliveryControlRoadblockingTypeEnum roadblockingType;

    public DeliveryControl withRoadblockingType(DeliveryControlRoadblockingTypeEnum roadblockingType) {
        this.roadblockingType = roadblockingType;
        return this;
    }
    
    public DeliveryControl(){}
}
