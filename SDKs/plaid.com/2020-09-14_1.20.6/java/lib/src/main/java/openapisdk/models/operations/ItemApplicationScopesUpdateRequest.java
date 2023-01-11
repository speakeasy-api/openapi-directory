package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ItemApplicationScopesUpdateRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ItemApplicationScopesUpdateRequest request;
    public ItemApplicationScopesUpdateRequest withRequest(openapisdk.models.shared.ItemApplicationScopesUpdateRequest request) {
        this.request = request;
        return this;
    }
}