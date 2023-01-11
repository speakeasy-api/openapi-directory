package openapisdk.models.operations;



public class DlpProjectsLocationsDlpJobsListResponse {
    public String contentType;
    public DlpProjectsLocationsDlpJobsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GooglePrivacyDlpV2ListDlpJobsResponse googlePrivacyDlpV2ListDlpJobsResponse;
    public DlpProjectsLocationsDlpJobsListResponse withGooglePrivacyDlpV2ListDlpJobsResponse(openapisdk.models.shared.GooglePrivacyDlpV2ListDlpJobsResponse googlePrivacyDlpV2ListDlpJobsResponse) {
        this.googlePrivacyDlpV2ListDlpJobsResponse = googlePrivacyDlpV2ListDlpJobsResponse;
        return this;
    }
    public Long statusCode;
    public DlpProjectsLocationsDlpJobsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}