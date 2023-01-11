package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IdentitytoolkitRelyingpartyGetAccountInfoRequest {
    public IdentitytoolkitRelyingpartyGetAccountInfoQueryParams queryParams;
    public IdentitytoolkitRelyingpartyGetAccountInfoRequest withQueryParams(IdentitytoolkitRelyingpartyGetAccountInfoQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.IdentitytoolkitRelyingpartyGetAccountInfoRequest request;
    public IdentitytoolkitRelyingpartyGetAccountInfoRequest withRequest(openapisdk.models.shared.IdentitytoolkitRelyingpartyGetAccountInfoRequest request) {
        this.request = request;
        return this;
    }
    public IdentitytoolkitRelyingpartyGetAccountInfoSecurity security;
    public IdentitytoolkitRelyingpartyGetAccountInfoRequest withSecurity(IdentitytoolkitRelyingpartyGetAccountInfoSecurity security) {
        this.security = security;
        return this;
    }
}