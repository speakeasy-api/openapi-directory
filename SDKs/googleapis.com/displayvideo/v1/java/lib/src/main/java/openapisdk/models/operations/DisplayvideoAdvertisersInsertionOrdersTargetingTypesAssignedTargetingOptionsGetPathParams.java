package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=advertiserId")
    public String advertiserId;
    public DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsGetPathParams withAdvertiserId(String advertiserId) {
        this.advertiserId = advertiserId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=assignedTargetingOptionId")
    public String assignedTargetingOptionId;
    public DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsGetPathParams withAssignedTargetingOptionId(String assignedTargetingOptionId) {
        this.assignedTargetingOptionId = assignedTargetingOptionId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=insertionOrderId")
    public String insertionOrderId;
    public DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsGetPathParams withInsertionOrderId(String insertionOrderId) {
        this.insertionOrderId = insertionOrderId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=targetingType")
    public DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum targetingType;
    public DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsGetPathParams withTargetingType(DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsGetTargetingTypeEnum targetingType) {
        this.targetingType = targetingType;
        return this;
    }
}