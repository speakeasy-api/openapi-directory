package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateContactRequest {
    public CreateContactPathParams pathParams;
    public CreateContactRequest withPathParams(CreateContactPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ContactCreateRequest request;
    public CreateContactRequest withRequest(openapisdk.models.shared.ContactCreateRequest request) {
        this.request = request;
        return this;
    }
}