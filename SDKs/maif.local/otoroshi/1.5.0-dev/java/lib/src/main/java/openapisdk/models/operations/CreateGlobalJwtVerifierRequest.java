package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateGlobalJwtVerifierRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GlobalJwtVerifier request;
    public CreateGlobalJwtVerifierRequest withRequest(openapisdk.models.shared.GlobalJwtVerifier request) {
        this.request = request;
        return this;
    }
    public CreateGlobalJwtVerifierSecurity security;
    public CreateGlobalJwtVerifierRequest withSecurity(CreateGlobalJwtVerifierSecurity security) {
        this.security = security;
        return this;
    }
}