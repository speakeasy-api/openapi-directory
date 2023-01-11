package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ExtrasGraphsPartialUpdateRequest {
    public ExtrasGraphsPartialUpdatePathParams pathParams;
    public ExtrasGraphsPartialUpdateRequest withPathParams(ExtrasGraphsPartialUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WritableGraphInput request;
    public ExtrasGraphsPartialUpdateRequest withRequest(openapisdk.models.shared.WritableGraphInput request) {
        this.request = request;
        return this;
    }
}