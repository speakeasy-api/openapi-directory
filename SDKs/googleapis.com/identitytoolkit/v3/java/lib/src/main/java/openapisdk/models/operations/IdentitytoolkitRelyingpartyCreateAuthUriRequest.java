package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IdentitytoolkitRelyingpartyCreateAuthUriRequest {
    public IdentitytoolkitRelyingpartyCreateAuthUriQueryParams queryParams;
    public IdentitytoolkitRelyingpartyCreateAuthUriRequest withQueryParams(IdentitytoolkitRelyingpartyCreateAuthUriQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.IdentitytoolkitRelyingpartyCreateAuthUriRequest request;
    public IdentitytoolkitRelyingpartyCreateAuthUriRequest withRequest(openapisdk.models.shared.IdentitytoolkitRelyingpartyCreateAuthUriRequest request) {
        this.request = request;
        return this;
    }
    public IdentitytoolkitRelyingpartyCreateAuthUriSecurity security;
    public IdentitytoolkitRelyingpartyCreateAuthUriRequest withSecurity(IdentitytoolkitRelyingpartyCreateAuthUriSecurity security) {
        this.security = security;
        return this;
    }
}