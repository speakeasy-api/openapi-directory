package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostVisitorIdentificationV3TokensCreateGenerateTokenRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.IdentificationTokenGenerationRequest request;
    public PostVisitorIdentificationV3TokensCreateGenerateTokenRequest withRequest(openapisdk.models.shared.IdentificationTokenGenerationRequest request) {
        this.request = request;
        return this;
    }
    public PostVisitorIdentificationV3TokensCreateGenerateTokenSecurity security;
    public PostVisitorIdentificationV3TokensCreateGenerateTokenRequest withSecurity(PostVisitorIdentificationV3TokensCreateGenerateTokenSecurity security) {
        this.security = security;
        return this;
    }
}