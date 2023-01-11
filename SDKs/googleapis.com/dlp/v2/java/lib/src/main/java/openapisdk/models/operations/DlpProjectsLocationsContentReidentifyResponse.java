package openapisdk.models.operations;



public class DlpProjectsLocationsContentReidentifyResponse {
    public String contentType;
    public DlpProjectsLocationsContentReidentifyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GooglePrivacyDlpV2ReidentifyContentResponse googlePrivacyDlpV2ReidentifyContentResponse;
    public DlpProjectsLocationsContentReidentifyResponse withGooglePrivacyDlpV2ReidentifyContentResponse(openapisdk.models.shared.GooglePrivacyDlpV2ReidentifyContentResponse googlePrivacyDlpV2ReidentifyContentResponse) {
        this.googlePrivacyDlpV2ReidentifyContentResponse = googlePrivacyDlpV2ReidentifyContentResponse;
        return this;
    }
    public Long statusCode;
    public DlpProjectsLocationsContentReidentifyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}