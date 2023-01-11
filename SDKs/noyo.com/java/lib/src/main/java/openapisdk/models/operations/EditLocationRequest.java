package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EditLocationRequest {
    public EditLocationPathParams pathParams;
    public EditLocationRequest withPathParams(EditLocationPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.LocationEditRequest request;
    public EditLocationRequest withRequest(openapisdk.models.shared.LocationEditRequest request) {
        this.request = request;
        return this;
    }
}