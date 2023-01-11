package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IdentitytoolkitRelyingpartyVerifyPhoneNumberRequest {
    public IdentitytoolkitRelyingpartyVerifyPhoneNumberQueryParams queryParams;
    public IdentitytoolkitRelyingpartyVerifyPhoneNumberRequest withQueryParams(IdentitytoolkitRelyingpartyVerifyPhoneNumberQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.IdentitytoolkitRelyingpartyVerifyPhoneNumberRequest request;
    public IdentitytoolkitRelyingpartyVerifyPhoneNumberRequest withRequest(openapisdk.models.shared.IdentitytoolkitRelyingpartyVerifyPhoneNumberRequest request) {
        this.request = request;
        return this;
    }
    public IdentitytoolkitRelyingpartyVerifyPhoneNumberSecurity security;
    public IdentitytoolkitRelyingpartyVerifyPhoneNumberRequest withSecurity(IdentitytoolkitRelyingpartyVerifyPhoneNumberSecurity security) {
        this.security = security;
        return this;
    }
}