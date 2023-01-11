package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IdentitytoolkitAccountsMfaEnrollmentWithdrawRequest {
    public IdentitytoolkitAccountsMfaEnrollmentWithdrawQueryParams queryParams;
    public IdentitytoolkitAccountsMfaEnrollmentWithdrawRequest withQueryParams(IdentitytoolkitAccountsMfaEnrollmentWithdrawQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleCloudIdentitytoolkitV2WithdrawMfaRequest request;
    public IdentitytoolkitAccountsMfaEnrollmentWithdrawRequest withRequest(openapisdk.models.shared.GoogleCloudIdentitytoolkitV2WithdrawMfaRequest request) {
        this.request = request;
        return this;
    }
    public IdentitytoolkitAccountsMfaEnrollmentWithdrawSecurity security;
    public IdentitytoolkitAccountsMfaEnrollmentWithdrawRequest withSecurity(IdentitytoolkitAccountsMfaEnrollmentWithdrawSecurity security) {
        this.security = security;
        return this;
    }
}