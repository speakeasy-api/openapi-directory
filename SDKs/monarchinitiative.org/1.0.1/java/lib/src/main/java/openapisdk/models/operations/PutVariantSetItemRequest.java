package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutVariantSetItemRequest {
    public PutVariantSetItemPathParams pathParams;
    public PutVariantSetItemRequest withPathParams(PutVariantSetItemPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.VariantSet request;
    public PutVariantSetItemRequest withRequest(openapisdk.models.shared.VariantSet request) {
        this.request = request;
        return this;
    }
}