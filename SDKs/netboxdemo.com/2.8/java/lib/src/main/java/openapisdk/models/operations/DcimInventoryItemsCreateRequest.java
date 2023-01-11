package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DcimInventoryItemsCreateRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WritableInventoryItemInput request;
    public DcimInventoryItemsCreateRequest withRequest(openapisdk.models.shared.WritableInventoryItemInput request) {
        this.request = request;
        return this;
    }
}