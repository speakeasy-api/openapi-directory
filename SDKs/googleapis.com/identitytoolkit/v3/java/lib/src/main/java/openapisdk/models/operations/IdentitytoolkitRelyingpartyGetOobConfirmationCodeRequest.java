package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IdentitytoolkitRelyingpartyGetOobConfirmationCodeRequest {
    public IdentitytoolkitRelyingpartyGetOobConfirmationCodeQueryParams queryParams;
    public IdentitytoolkitRelyingpartyGetOobConfirmationCodeRequest withQueryParams(IdentitytoolkitRelyingpartyGetOobConfirmationCodeQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Relyingparty request;
    public IdentitytoolkitRelyingpartyGetOobConfirmationCodeRequest withRequest(openapisdk.models.shared.Relyingparty request) {
        this.request = request;
        return this;
    }
    public IdentitytoolkitRelyingpartyGetOobConfirmationCodeSecurity security;
    public IdentitytoolkitRelyingpartyGetOobConfirmationCodeRequest withSecurity(IdentitytoolkitRelyingpartyGetOobConfirmationCodeSecurity security) {
        this.security = security;
        return this;
    }
}