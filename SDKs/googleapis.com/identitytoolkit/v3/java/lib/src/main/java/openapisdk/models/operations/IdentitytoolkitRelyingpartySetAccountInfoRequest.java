package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IdentitytoolkitRelyingpartySetAccountInfoRequest {
    public IdentitytoolkitRelyingpartySetAccountInfoQueryParams queryParams;
    public IdentitytoolkitRelyingpartySetAccountInfoRequest withQueryParams(IdentitytoolkitRelyingpartySetAccountInfoQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.IdentitytoolkitRelyingpartySetAccountInfoRequest request;
    public IdentitytoolkitRelyingpartySetAccountInfoRequest withRequest(openapisdk.models.shared.IdentitytoolkitRelyingpartySetAccountInfoRequest request) {
        this.request = request;
        return this;
    }
    public IdentitytoolkitRelyingpartySetAccountInfoSecurity security;
    public IdentitytoolkitRelyingpartySetAccountInfoRequest withSecurity(IdentitytoolkitRelyingpartySetAccountInfoSecurity security) {
        this.security = security;
        return this;
    }
}