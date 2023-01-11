package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostVariantSetsCollectionRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.VariantSet request;
    public PostVariantSetsCollectionRequest withRequest(openapisdk.models.shared.VariantSet request) {
        this.request = request;
        return this;
    }
}