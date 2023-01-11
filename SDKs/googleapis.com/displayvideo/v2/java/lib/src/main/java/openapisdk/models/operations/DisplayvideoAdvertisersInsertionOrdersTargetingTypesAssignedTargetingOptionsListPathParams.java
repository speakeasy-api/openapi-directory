package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=advertiserId")
    public String advertiserId;
    public DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsListPathParams withAdvertiserId(String advertiserId) {
        this.advertiserId = advertiserId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=insertionOrderId")
    public String insertionOrderId;
    public DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsListPathParams withInsertionOrderId(String insertionOrderId) {
        this.insertionOrderId = insertionOrderId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=targetingType")
    public DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum targetingType;
    public DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsListPathParams withTargetingType(DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsListTargetingTypeEnum targetingType) {
        this.targetingType = targetingType;
        return this;
    }
}