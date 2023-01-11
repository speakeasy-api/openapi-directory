package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IdentitytoolkitAccountsMfaEnrollmentStartRequest {
    public IdentitytoolkitAccountsMfaEnrollmentStartQueryParams queryParams;
    public IdentitytoolkitAccountsMfaEnrollmentStartRequest withQueryParams(IdentitytoolkitAccountsMfaEnrollmentStartQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleCloudIdentitytoolkitV2StartMfaEnrollmentRequest request;
    public IdentitytoolkitAccountsMfaEnrollmentStartRequest withRequest(openapisdk.models.shared.GoogleCloudIdentitytoolkitV2StartMfaEnrollmentRequest request) {
        this.request = request;
        return this;
    }
    public IdentitytoolkitAccountsMfaEnrollmentStartSecurity security;
    public IdentitytoolkitAccountsMfaEnrollmentStartRequest withSecurity(IdentitytoolkitAccountsMfaEnrollmentStartSecurity security) {
        this.security = security;
        return this;
    }
}