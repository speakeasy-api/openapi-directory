package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=advertiserId")
    public String advertiserId;
    public DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsDeletePathParams withAdvertiserId(String advertiserId) {
        this.advertiserId = advertiserId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=assignedTargetingOptionId")
    public String assignedTargetingOptionId;
    public DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsDeletePathParams withAssignedTargetingOptionId(String assignedTargetingOptionId) {
        this.assignedTargetingOptionId = assignedTargetingOptionId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=lineItemId")
    public String lineItemId;
    public DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsDeletePathParams withLineItemId(String lineItemId) {
        this.lineItemId = lineItemId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=targetingType")
    public DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum targetingType;
    public DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsDeletePathParams withTargetingType(DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum targetingType) {
        this.targetingType = targetingType;
        return this;
    }
}