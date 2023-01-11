package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=advertiserId")
    public String advertiserId;
    public DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreatePathParams withAdvertiserId(String advertiserId) {
        this.advertiserId = advertiserId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=insertionOrderId")
    public String insertionOrderId;
    public DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreatePathParams withInsertionOrderId(String insertionOrderId) {
        this.insertionOrderId = insertionOrderId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=targetingType")
    public DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum targetingType;
    public DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreatePathParams withTargetingType(DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsCreateTargetingTypeEnum targetingType) {
        this.targetingType = targetingType;
        return this;
    }
}