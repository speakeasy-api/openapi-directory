package openapisdk.models.operations;



public class DlpProjectsLocationsDlpJobsCreateResponse {
    public String contentType;
    public DlpProjectsLocationsDlpJobsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GooglePrivacyDlpV2DlpJob googlePrivacyDlpV2DlpJob;
    public DlpProjectsLocationsDlpJobsCreateResponse withGooglePrivacyDlpV2DlpJob(openapisdk.models.shared.GooglePrivacyDlpV2DlpJob googlePrivacyDlpV2DlpJob) {
        this.googlePrivacyDlpV2DlpJob = googlePrivacyDlpV2DlpJob;
        return this;
    }
    public Long statusCode;
    public DlpProjectsLocationsDlpJobsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}