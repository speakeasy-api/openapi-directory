package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IdentitytoolkitRelyingpartyResetPasswordRequest {
    public IdentitytoolkitRelyingpartyResetPasswordQueryParams queryParams;
    public IdentitytoolkitRelyingpartyResetPasswordRequest withQueryParams(IdentitytoolkitRelyingpartyResetPasswordQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.IdentitytoolkitRelyingpartyResetPasswordRequest request;
    public IdentitytoolkitRelyingpartyResetPasswordRequest withRequest(openapisdk.models.shared.IdentitytoolkitRelyingpartyResetPasswordRequest request) {
        this.request = request;
        return this;
    }
    public IdentitytoolkitRelyingpartyResetPasswordSecurity security;
    public IdentitytoolkitRelyingpartyResetPasswordRequest withSecurity(IdentitytoolkitRelyingpartyResetPasswordSecurity security) {
        this.security = security;
        return this;
    }
}