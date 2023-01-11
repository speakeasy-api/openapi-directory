package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ExtrasGraphsPartialUpdateRequest {
    public ExtrasGraphsPartialUpdatePathParams pathParams;
    public ExtrasGraphsPartialUpdateRequest withPathParams(ExtrasGraphsPartialUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GraphInput request;
    public ExtrasGraphsPartialUpdateRequest withRequest(openapisdk.models.shared.GraphInput request) {
        this.request = request;
        return this;
    }
}