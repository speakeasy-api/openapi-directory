package openapisdk.models.operations;



public class DlpProjectsLocationsContentInspectResponse {
    public String contentType;
    public DlpProjectsLocationsContentInspectResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GooglePrivacyDlpV2InspectContentResponse googlePrivacyDlpV2InspectContentResponse;
    public DlpProjectsLocationsContentInspectResponse withGooglePrivacyDlpV2InspectContentResponse(openapisdk.models.shared.GooglePrivacyDlpV2InspectContentResponse googlePrivacyDlpV2InspectContentResponse) {
        this.googlePrivacyDlpV2InspectContentResponse = googlePrivacyDlpV2InspectContentResponse;
        return this;
    }
    public Long statusCode;
    public DlpProjectsLocationsContentInspectResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}