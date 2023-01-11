package openapisdk.models.operations;



public class DlpProjectsLocationsJobTriggersCreateResponse {
    public String contentType;
    public DlpProjectsLocationsJobTriggersCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GooglePrivacyDlpV2JobTrigger googlePrivacyDlpV2JobTrigger;
    public DlpProjectsLocationsJobTriggersCreateResponse withGooglePrivacyDlpV2JobTrigger(openapisdk.models.shared.GooglePrivacyDlpV2JobTrigger googlePrivacyDlpV2JobTrigger) {
        this.googlePrivacyDlpV2JobTrigger = googlePrivacyDlpV2JobTrigger;
        return this;
    }
    public Long statusCode;
    public DlpProjectsLocationsJobTriggersCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}