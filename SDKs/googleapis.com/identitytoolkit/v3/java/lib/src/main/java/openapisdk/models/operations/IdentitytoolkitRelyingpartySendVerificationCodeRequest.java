package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IdentitytoolkitRelyingpartySendVerificationCodeRequest {
    public IdentitytoolkitRelyingpartySendVerificationCodeQueryParams queryParams;
    public IdentitytoolkitRelyingpartySendVerificationCodeRequest withQueryParams(IdentitytoolkitRelyingpartySendVerificationCodeQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.IdentitytoolkitRelyingpartySendVerificationCodeRequest request;
    public IdentitytoolkitRelyingpartySendVerificationCodeRequest withRequest(openapisdk.models.shared.IdentitytoolkitRelyingpartySendVerificationCodeRequest request) {
        this.request = request;
        return this;
    }
    public IdentitytoolkitRelyingpartySendVerificationCodeSecurity security;
    public IdentitytoolkitRelyingpartySendVerificationCodeRequest withSecurity(IdentitytoolkitRelyingpartySendVerificationCodeSecurity security) {
        this.security = security;
        return this;
    }
}