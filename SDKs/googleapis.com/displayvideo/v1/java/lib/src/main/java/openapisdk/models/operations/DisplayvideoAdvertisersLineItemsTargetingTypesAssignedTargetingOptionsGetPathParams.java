package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=advertiserId")
    public String advertiserId;
    public DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsGetPathParams withAdvertiserId(String advertiserId) {
        this.advertiserId = advertiserId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=assignedTargetingOptionId")
    public String assignedTargetingOptionId;
    public DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsGetPathParams withAssignedTargetingOptionId(String assignedTargetingOptionId) {
        this.assignedTargetingOptionId = assignedTargetingOptionId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=lineItemId")
    public String lineItemId;
    public DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsGetPathParams withLineItemId(String lineItemId) {
        this.lineItemId = lineItemId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=targetingType")
    public DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum targetingType;
    public DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsGetPathParams withTargetingType(DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum targetingType) {
        this.targetingType = targetingType;
        return this;
    }
}