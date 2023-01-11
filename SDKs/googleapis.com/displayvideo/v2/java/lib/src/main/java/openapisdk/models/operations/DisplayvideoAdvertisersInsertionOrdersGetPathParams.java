package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisplayvideoAdvertisersInsertionOrdersGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=advertiserId")
    public String advertiserId;
    public DisplayvideoAdvertisersInsertionOrdersGetPathParams withAdvertiserId(String advertiserId) {
        this.advertiserId = advertiserId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=insertionOrderId")
    public String insertionOrderId;
    public DisplayvideoAdvertisersInsertionOrdersGetPathParams withInsertionOrderId(String insertionOrderId) {
        this.insertionOrderId = insertionOrderId;
        return this;
    }
}