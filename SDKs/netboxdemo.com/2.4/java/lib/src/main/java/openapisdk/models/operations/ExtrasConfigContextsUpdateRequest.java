package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ExtrasConfigContextsUpdateRequest {
    public ExtrasConfigContextsUpdatePathParams pathParams;
    public ExtrasConfigContextsUpdateRequest withPathParams(ExtrasConfigContextsUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WritableConfigContextInput request;
    public ExtrasConfigContextsUpdateRequest withRequest(openapisdk.models.shared.WritableConfigContextInput request) {
        this.request = request;
        return this;
    }
}