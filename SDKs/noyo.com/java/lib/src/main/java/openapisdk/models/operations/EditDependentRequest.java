package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EditDependentRequest {
    public EditDependentPathParams pathParams;
    public EditDependentRequest withPathParams(EditDependentPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DependentEditRequest request;
    public EditDependentRequest withRequest(openapisdk.models.shared.DependentEditRequest request) {
        this.request = request;
        return this;
    }
}