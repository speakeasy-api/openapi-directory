package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=advertiserId")
    public String advertiserId;
    public DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeletePathParams withAdvertiserId(String advertiserId) {
        this.advertiserId = advertiserId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=assignedTargetingOptionId")
    public String assignedTargetingOptionId;
    public DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeletePathParams withAssignedTargetingOptionId(String assignedTargetingOptionId) {
        this.assignedTargetingOptionId = assignedTargetingOptionId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=insertionOrderId")
    public String insertionOrderId;
    public DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeletePathParams withInsertionOrderId(String insertionOrderId) {
        this.insertionOrderId = insertionOrderId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=targetingType")
    public DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum targetingType;
    public DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeletePathParams withTargetingType(DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsDeleteTargetingTypeEnum targetingType) {
        this.targetingType = targetingType;
        return this;
    }
}