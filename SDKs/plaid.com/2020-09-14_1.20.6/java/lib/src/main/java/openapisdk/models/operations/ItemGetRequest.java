package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ItemGetRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ItemGetRequest request;
    public ItemGetRequest withRequest(openapisdk.models.shared.ItemGetRequest request) {
        this.request = request;
        return this;
    }
}