package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ExtrasConfigContextsPartialUpdateRequest {
    public ExtrasConfigContextsPartialUpdatePathParams pathParams;
    public ExtrasConfigContextsPartialUpdateRequest withPathParams(ExtrasConfigContextsPartialUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WritableConfigContextInput request;
    public ExtrasConfigContextsPartialUpdateRequest withRequest(openapisdk.models.shared.WritableConfigContextInput request) {
        this.request = request;
        return this;
    }
}