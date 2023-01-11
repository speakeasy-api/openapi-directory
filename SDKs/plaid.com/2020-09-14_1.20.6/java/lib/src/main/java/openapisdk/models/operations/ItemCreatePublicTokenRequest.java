package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ItemCreatePublicTokenRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ItemPublicTokenCreateRequest request;
    public ItemCreatePublicTokenRequest withRequest(openapisdk.models.shared.ItemPublicTokenCreateRequest request) {
        this.request = request;
        return this;
    }
}