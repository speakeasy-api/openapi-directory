package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IdentitytoolkitRelyingpartySignupNewUserRequest {
    public IdentitytoolkitRelyingpartySignupNewUserQueryParams queryParams;
    public IdentitytoolkitRelyingpartySignupNewUserRequest withQueryParams(IdentitytoolkitRelyingpartySignupNewUserQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.IdentitytoolkitRelyingpartySignupNewUserRequest request;
    public IdentitytoolkitRelyingpartySignupNewUserRequest withRequest(openapisdk.models.shared.IdentitytoolkitRelyingpartySignupNewUserRequest request) {
        this.request = request;
        return this;
    }
    public IdentitytoolkitRelyingpartySignupNewUserSecurity security;
    public IdentitytoolkitRelyingpartySignupNewUserRequest withSecurity(IdentitytoolkitRelyingpartySignupNewUserSecurity security) {
        this.security = security;
        return this;
    }
}