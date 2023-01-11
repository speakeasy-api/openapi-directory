package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ItemAccessTokenInvalidateRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ItemAccessTokenInvalidateRequest request;
    public ItemAccessTokenInvalidateRequest withRequest(openapisdk.models.shared.ItemAccessTokenInvalidateRequest request) {
        this.request = request;
        return this;
    }
}