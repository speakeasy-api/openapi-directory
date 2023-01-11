package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreatePeppolIdentifierRequest {
    public CreatePeppolIdentifierPathParams pathParams;
    public CreatePeppolIdentifierRequest withPathParams(CreatePeppolIdentifierPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public CreatePeppolIdentifierRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
}