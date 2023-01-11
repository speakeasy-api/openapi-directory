package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ItemRemoveRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ItemRemoveRequest request;
    public ItemRemoveRequest withRequest(openapisdk.models.shared.ItemRemoveRequest request) {
        this.request = request;
        return this;
    }
}