package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IdentitytoolkitAccountsMfaSignInFinalizeRequest {
    public IdentitytoolkitAccountsMfaSignInFinalizeQueryParams queryParams;
    public IdentitytoolkitAccountsMfaSignInFinalizeRequest withQueryParams(IdentitytoolkitAccountsMfaSignInFinalizeQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleCloudIdentitytoolkitV2FinalizeMfaSignInRequest request;
    public IdentitytoolkitAccountsMfaSignInFinalizeRequest withRequest(openapisdk.models.shared.GoogleCloudIdentitytoolkitV2FinalizeMfaSignInRequest request) {
        this.request = request;
        return this;
    }
    public IdentitytoolkitAccountsMfaSignInFinalizeSecurity security;
    public IdentitytoolkitAccountsMfaSignInFinalizeRequest withSecurity(IdentitytoolkitAccountsMfaSignInFinalizeSecurity security) {
        this.security = security;
        return this;
    }
}