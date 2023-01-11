package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IdentitytoolkitRelyingpartyVerifyCustomTokenRequest {
    public IdentitytoolkitRelyingpartyVerifyCustomTokenQueryParams queryParams;
    public IdentitytoolkitRelyingpartyVerifyCustomTokenRequest withQueryParams(IdentitytoolkitRelyingpartyVerifyCustomTokenQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.IdentitytoolkitRelyingpartyVerifyCustomTokenRequest request;
    public IdentitytoolkitRelyingpartyVerifyCustomTokenRequest withRequest(openapisdk.models.shared.IdentitytoolkitRelyingpartyVerifyCustomTokenRequest request) {
        this.request = request;
        return this;
    }
    public IdentitytoolkitRelyingpartyVerifyCustomTokenSecurity security;
    public IdentitytoolkitRelyingpartyVerifyCustomTokenRequest withSecurity(IdentitytoolkitRelyingpartyVerifyCustomTokenSecurity security) {
        this.security = security;
        return this;
    }
}