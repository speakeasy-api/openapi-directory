package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddItemListRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ItemListInput request;
    public AddItemListRequest withRequest(openapisdk.models.shared.ItemListInput request) {
        this.request = request;
        return this;
    }
}