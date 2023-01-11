package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateGlobalJwtVerifierRequest {
    public UpdateGlobalJwtVerifierPathParams pathParams;
    public UpdateGlobalJwtVerifierRequest withPathParams(UpdateGlobalJwtVerifierPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GlobalJwtVerifier request;
    public UpdateGlobalJwtVerifierRequest withRequest(openapisdk.models.shared.GlobalJwtVerifier request) {
        this.request = request;
        return this;
    }
    public UpdateGlobalJwtVerifierSecurity security;
    public UpdateGlobalJwtVerifierRequest withSecurity(UpdateGlobalJwtVerifierSecurity security) {
        this.security = security;
        return this;
    }
}