package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IdentitytoolkitAccountsMfaSignInStartRequest {
    public IdentitytoolkitAccountsMfaSignInStartQueryParams queryParams;
    public IdentitytoolkitAccountsMfaSignInStartRequest withQueryParams(IdentitytoolkitAccountsMfaSignInStartQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleCloudIdentitytoolkitV2StartMfaSignInRequest request;
    public IdentitytoolkitAccountsMfaSignInStartRequest withRequest(openapisdk.models.shared.GoogleCloudIdentitytoolkitV2StartMfaSignInRequest request) {
        this.request = request;
        return this;
    }
    public IdentitytoolkitAccountsMfaSignInStartSecurity security;
    public IdentitytoolkitAccountsMfaSignInStartRequest withSecurity(IdentitytoolkitAccountsMfaSignInStartSecurity security) {
        this.security = security;
        return this;
    }
}