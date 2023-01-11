package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IdentitytoolkitRelyingpartyEmailLinkSigninRequest {
    public IdentitytoolkitRelyingpartyEmailLinkSigninQueryParams queryParams;
    public IdentitytoolkitRelyingpartyEmailLinkSigninRequest withQueryParams(IdentitytoolkitRelyingpartyEmailLinkSigninQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.IdentitytoolkitRelyingpartyEmailLinkSigninRequest request;
    public IdentitytoolkitRelyingpartyEmailLinkSigninRequest withRequest(openapisdk.models.shared.IdentitytoolkitRelyingpartyEmailLinkSigninRequest request) {
        this.request = request;
        return this;
    }
    public IdentitytoolkitRelyingpartyEmailLinkSigninSecurity security;
    public IdentitytoolkitRelyingpartyEmailLinkSigninRequest withSecurity(IdentitytoolkitRelyingpartyEmailLinkSigninSecurity security) {
        this.security = security;
        return this;
    }
}