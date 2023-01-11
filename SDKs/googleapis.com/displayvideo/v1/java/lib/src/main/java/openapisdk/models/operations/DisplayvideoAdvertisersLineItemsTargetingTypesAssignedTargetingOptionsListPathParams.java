package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=advertiserId")
    public String advertiserId;
    public DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListPathParams withAdvertiserId(String advertiserId) {
        this.advertiserId = advertiserId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=lineItemId")
    public String lineItemId;
    public DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListPathParams withLineItemId(String lineItemId) {
        this.lineItemId = lineItemId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=targetingType")
    public DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum targetingType;
    public DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListPathParams withTargetingType(DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum targetingType) {
        this.targetingType = targetingType;
        return this;
    }
}