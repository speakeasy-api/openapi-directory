package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EditGroupApplicationRequest {
    public EditGroupApplicationPathParams pathParams;
    public EditGroupApplicationRequest withPathParams(EditGroupApplicationPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ApplicationEditRequest request;
    public EditGroupApplicationRequest withRequest(openapisdk.models.shared.ApplicationEditRequest request) {
        this.request = request;
        return this;
    }
}