package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddExampleRequest {
    public AddExamplePathParams pathParams;
    public AddExampleRequest withPathParams(AddExamplePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public AddExampleRequestBody request;
    public AddExampleRequest withRequest(AddExampleRequestBody request) {
        this.request = request;
        return this;
    }
    public AddExampleSecurity security;
    public AddExampleRequest withSecurity(AddExampleSecurity security) {
        this.security = security;
        return this;
    }
}