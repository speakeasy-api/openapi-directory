package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutCertRequest {
    public PutCertPathParams pathParams;
    public PutCertRequest withPathParams(PutCertPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Certificate request;
    public PutCertRequest withRequest(openapisdk.models.shared.Certificate request) {
        this.request = request;
        return this;
    }
    public PutCertSecurity security;
    public PutCertRequest withSecurity(PutCertSecurity security) {
        this.security = security;
        return this;
    }
}