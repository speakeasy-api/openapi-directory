package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ItemImportRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ItemImportRequest request;
    public ItemImportRequest withRequest(openapisdk.models.shared.ItemImportRequest request) {
        this.request = request;
        return this;
    }
}