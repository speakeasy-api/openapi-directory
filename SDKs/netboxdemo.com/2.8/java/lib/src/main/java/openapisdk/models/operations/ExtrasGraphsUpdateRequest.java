package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ExtrasGraphsUpdateRequest {
    public ExtrasGraphsUpdatePathParams pathParams;
    public ExtrasGraphsUpdateRequest withPathParams(ExtrasGraphsUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GraphInput request;
    public ExtrasGraphsUpdateRequest withRequest(openapisdk.models.shared.GraphInput request) {
        this.request = request;
        return this;
    }
}