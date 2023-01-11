package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DcimInventoryItemsPartialUpdateRequest {
    public DcimInventoryItemsPartialUpdatePathParams pathParams;
    public DcimInventoryItemsPartialUpdateRequest withPathParams(DcimInventoryItemsPartialUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WritableInventoryItemInput request;
    public DcimInventoryItemsPartialUpdateRequest withRequest(openapisdk.models.shared.WritableInventoryItemInput request) {
        this.request = request;
        return this;
    }
}