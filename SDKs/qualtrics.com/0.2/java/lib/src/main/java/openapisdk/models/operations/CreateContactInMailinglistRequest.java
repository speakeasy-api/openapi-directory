package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateContactInMailinglistRequest {
    public CreateContactInMailinglistPathParams pathParams;
    public CreateContactInMailinglistRequest withPathParams(CreateContactInMailinglistPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateContactInMailingList request;
    public CreateContactInMailinglistRequest withRequest(openapisdk.models.shared.CreateContactInMailingList request) {
        this.request = request;
        return this;
    }
}