package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DcimInventoryItemsUpdateRequest {
    public DcimInventoryItemsUpdatePathParams pathParams;
    public DcimInventoryItemsUpdateRequest withPathParams(DcimInventoryItemsUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WritableInventoryItemInput request;
    public DcimInventoryItemsUpdateRequest withRequest(openapisdk.models.shared.WritableInventoryItemInput request) {
        this.request = request;
        return this;
    }
}