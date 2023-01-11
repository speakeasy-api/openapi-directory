package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IdentitytoolkitRelyingpartyVerifyAssertionRequest {
    public IdentitytoolkitRelyingpartyVerifyAssertionQueryParams queryParams;
    public IdentitytoolkitRelyingpartyVerifyAssertionRequest withQueryParams(IdentitytoolkitRelyingpartyVerifyAssertionQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.IdentitytoolkitRelyingpartyVerifyAssertionRequest request;
    public IdentitytoolkitRelyingpartyVerifyAssertionRequest withRequest(openapisdk.models.shared.IdentitytoolkitRelyingpartyVerifyAssertionRequest request) {
        this.request = request;
        return this;
    }
    public IdentitytoolkitRelyingpartyVerifyAssertionSecurity security;
    public IdentitytoolkitRelyingpartyVerifyAssertionRequest withSecurity(IdentitytoolkitRelyingpartyVerifyAssertionSecurity security) {
        this.security = security;
        return this;
    }
}