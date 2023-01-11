package openapisdk.models.operations;



public class DlpProjectsLocationsJobTriggersListResponse {
    public String contentType;
    public DlpProjectsLocationsJobTriggersListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GooglePrivacyDlpV2ListJobTriggersResponse googlePrivacyDlpV2ListJobTriggersResponse;
    public DlpProjectsLocationsJobTriggersListResponse withGooglePrivacyDlpV2ListJobTriggersResponse(openapisdk.models.shared.GooglePrivacyDlpV2ListJobTriggersResponse googlePrivacyDlpV2ListJobTriggersResponse) {
        this.googlePrivacyDlpV2ListJobTriggersResponse = googlePrivacyDlpV2ListJobTriggersResponse;
        return this;
    }
    public Long statusCode;
    public DlpProjectsLocationsJobTriggersListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}