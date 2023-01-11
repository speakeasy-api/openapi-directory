package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IdentitytoolkitRelyingpartySetProjectConfigRequest {
    public IdentitytoolkitRelyingpartySetProjectConfigQueryParams queryParams;
    public IdentitytoolkitRelyingpartySetProjectConfigRequest withQueryParams(IdentitytoolkitRelyingpartySetProjectConfigQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.IdentitytoolkitRelyingpartySetProjectConfigRequest request;
    public IdentitytoolkitRelyingpartySetProjectConfigRequest withRequest(openapisdk.models.shared.IdentitytoolkitRelyingpartySetProjectConfigRequest request) {
        this.request = request;
        return this;
    }
    public IdentitytoolkitRelyingpartySetProjectConfigSecurity security;
    public IdentitytoolkitRelyingpartySetProjectConfigRequest withSecurity(IdentitytoolkitRelyingpartySetProjectConfigSecurity security) {
        this.security = security;
        return this;
    }
}