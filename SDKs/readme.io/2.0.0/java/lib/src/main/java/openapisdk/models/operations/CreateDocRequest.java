package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateDocRequest {
    public CreateDocHeaders headers;
    public CreateDocRequest withHeaders(CreateDocHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Doc request;
    public CreateDocRequest withRequest(openapisdk.models.shared.Doc request) {
        this.request = request;
        return this;
    }
    public CreateDocSecurity security;
    public CreateDocRequest withSecurity(CreateDocSecurity security) {
        this.security = security;
        return this;
    }
}