package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=advertiserId")
    public String advertiserId;
    public DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsCreatePathParams withAdvertiserId(String advertiserId) {
        this.advertiserId = advertiserId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=lineItemId")
    public String lineItemId;
    public DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsCreatePathParams withLineItemId(String lineItemId) {
        this.lineItemId = lineItemId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=targetingType")
    public DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum targetingType;
    public DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsCreatePathParams withTargetingType(DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum targetingType) {
        this.targetingType = targetingType;
        return this;
    }
}