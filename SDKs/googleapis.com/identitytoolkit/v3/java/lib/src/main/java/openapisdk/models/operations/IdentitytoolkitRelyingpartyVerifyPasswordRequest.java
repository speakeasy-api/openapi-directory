package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IdentitytoolkitRelyingpartyVerifyPasswordRequest {
    public IdentitytoolkitRelyingpartyVerifyPasswordQueryParams queryParams;
    public IdentitytoolkitRelyingpartyVerifyPasswordRequest withQueryParams(IdentitytoolkitRelyingpartyVerifyPasswordQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.IdentitytoolkitRelyingpartyVerifyPasswordRequest request;
    public IdentitytoolkitRelyingpartyVerifyPasswordRequest withRequest(openapisdk.models.shared.IdentitytoolkitRelyingpartyVerifyPasswordRequest request) {
        this.request = request;
        return this;
    }
    public IdentitytoolkitRelyingpartyVerifyPasswordSecurity security;
    public IdentitytoolkitRelyingpartyVerifyPasswordRequest withSecurity(IdentitytoolkitRelyingpartyVerifyPasswordSecurity security) {
        this.security = security;
        return this;
    }
}