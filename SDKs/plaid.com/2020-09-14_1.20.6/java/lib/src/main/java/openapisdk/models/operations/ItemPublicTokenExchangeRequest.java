package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ItemPublicTokenExchangeRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ItemPublicTokenExchangeRequest request;
    public ItemPublicTokenExchangeRequest withRequest(openapisdk.models.shared.ItemPublicTokenExchangeRequest request) {
        this.request = request;
        return this;
    }
}