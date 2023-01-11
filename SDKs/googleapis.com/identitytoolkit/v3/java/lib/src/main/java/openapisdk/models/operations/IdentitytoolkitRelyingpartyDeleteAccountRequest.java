package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IdentitytoolkitRelyingpartyDeleteAccountRequest {
    public IdentitytoolkitRelyingpartyDeleteAccountQueryParams queryParams;
    public IdentitytoolkitRelyingpartyDeleteAccountRequest withQueryParams(IdentitytoolkitRelyingpartyDeleteAccountQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.IdentitytoolkitRelyingpartyDeleteAccountRequest request;
    public IdentitytoolkitRelyingpartyDeleteAccountRequest withRequest(openapisdk.models.shared.IdentitytoolkitRelyingpartyDeleteAccountRequest request) {
        this.request = request;
        return this;
    }
    public IdentitytoolkitRelyingpartyDeleteAccountSecurity security;
    public IdentitytoolkitRelyingpartyDeleteAccountRequest withSecurity(IdentitytoolkitRelyingpartyDeleteAccountSecurity security) {
        this.security = security;
        return this;
    }
}