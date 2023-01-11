package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisplayvideoAdvertisersInsertionOrdersBulkListInsertionOrderAssignedTargetingOptionsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=advertiserId")
    public String advertiserId;
    public DisplayvideoAdvertisersInsertionOrdersBulkListInsertionOrderAssignedTargetingOptionsPathParams withAdvertiserId(String advertiserId) {
        this.advertiserId = advertiserId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=insertionOrderId")
    public String insertionOrderId;
    public DisplayvideoAdvertisersInsertionOrdersBulkListInsertionOrderAssignedTargetingOptionsPathParams withInsertionOrderId(String insertionOrderId) {
        this.insertionOrderId = insertionOrderId;
        return this;
    }
}