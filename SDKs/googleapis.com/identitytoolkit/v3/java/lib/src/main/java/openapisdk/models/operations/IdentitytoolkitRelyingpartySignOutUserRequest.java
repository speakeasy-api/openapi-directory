package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IdentitytoolkitRelyingpartySignOutUserRequest {
    public IdentitytoolkitRelyingpartySignOutUserQueryParams queryParams;
    public IdentitytoolkitRelyingpartySignOutUserRequest withQueryParams(IdentitytoolkitRelyingpartySignOutUserQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.IdentitytoolkitRelyingpartySignOutUserRequest request;
    public IdentitytoolkitRelyingpartySignOutUserRequest withRequest(openapisdk.models.shared.IdentitytoolkitRelyingpartySignOutUserRequest request) {
        this.request = request;
        return this;
    }
    public IdentitytoolkitRelyingpartySignOutUserSecurity security;
    public IdentitytoolkitRelyingpartySignOutUserRequest withSecurity(IdentitytoolkitRelyingpartySignOutUserSecurity security) {
        this.security = security;
        return this;
    }
}