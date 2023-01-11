package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ItemApplicationListRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ItemApplicationListRequest request;
    public ItemApplicationListRequest withRequest(openapisdk.models.shared.ItemApplicationListRequest request) {
        this.request = request;
        return this;
    }
}