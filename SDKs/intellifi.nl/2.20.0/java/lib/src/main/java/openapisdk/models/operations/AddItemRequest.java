package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddItemRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ItemInput request;
    public AddItemRequest withRequest(openapisdk.models.shared.ItemInput request) {
        this.request = request;
        return this;
    }
}