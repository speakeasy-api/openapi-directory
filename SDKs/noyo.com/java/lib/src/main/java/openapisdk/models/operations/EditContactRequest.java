package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EditContactRequest {
    public EditContactPathParams pathParams;
    public EditContactRequest withPathParams(EditContactPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ContactEditRequest request;
    public EditContactRequest withRequest(openapisdk.models.shared.ContactEditRequest request) {
        this.request = request;
        return this;
    }
}