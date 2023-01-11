package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddSpotListRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ItemListInput request;
    public AddSpotListRequest withRequest(openapisdk.models.shared.ItemListInput request) {
        this.request = request;
        return this;
    }
}