package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IdentitytoolkitAccountsMfaEnrollmentFinalizeRequest {
    public IdentitytoolkitAccountsMfaEnrollmentFinalizeQueryParams queryParams;
    public IdentitytoolkitAccountsMfaEnrollmentFinalizeRequest withQueryParams(IdentitytoolkitAccountsMfaEnrollmentFinalizeQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleCloudIdentitytoolkitV2FinalizeMfaEnrollmentRequest request;
    public IdentitytoolkitAccountsMfaEnrollmentFinalizeRequest withRequest(openapisdk.models.shared.GoogleCloudIdentitytoolkitV2FinalizeMfaEnrollmentRequest request) {
        this.request = request;
        return this;
    }
    public IdentitytoolkitAccountsMfaEnrollmentFinalizeSecurity security;
    public IdentitytoolkitAccountsMfaEnrollmentFinalizeRequest withSecurity(IdentitytoolkitAccountsMfaEnrollmentFinalizeSecurity security) {
        this.security = security;
        return this;
    }
}