package openapisdk.models.operations;



public class DlpProjectsLocationsJobTriggersActivateResponse {
    public String contentType;
    public DlpProjectsLocationsJobTriggersActivateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GooglePrivacyDlpV2DlpJob googlePrivacyDlpV2DlpJob;
    public DlpProjectsLocationsJobTriggersActivateResponse withGooglePrivacyDlpV2DlpJob(openapisdk.models.shared.GooglePrivacyDlpV2DlpJob googlePrivacyDlpV2DlpJob) {
        this.googlePrivacyDlpV2DlpJob = googlePrivacyDlpV2DlpJob;
        return this;
    }
    public Long statusCode;
    public DlpProjectsLocationsJobTriggersActivateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}