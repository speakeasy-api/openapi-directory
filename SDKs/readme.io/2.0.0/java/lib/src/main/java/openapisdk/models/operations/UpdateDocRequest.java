package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateDocRequest {
    public UpdateDocPathParams pathParams;
    public UpdateDocRequest withPathParams(UpdateDocPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateDocHeaders headers;
    public UpdateDocRequest withHeaders(UpdateDocHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Doc request;
    public UpdateDocRequest withRequest(openapisdk.models.shared.Doc request) {
        this.request = request;
        return this;
    }
    public UpdateDocSecurity security;
    public UpdateDocRequest withSecurity(UpdateDocSecurity security) {
        this.security = security;
        return this;
    }
}