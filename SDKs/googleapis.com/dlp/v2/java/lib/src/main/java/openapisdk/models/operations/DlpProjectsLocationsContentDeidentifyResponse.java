package openapisdk.models.operations;



public class DlpProjectsLocationsContentDeidentifyResponse {
    public String contentType;
    public DlpProjectsLocationsContentDeidentifyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GooglePrivacyDlpV2DeidentifyContentResponse googlePrivacyDlpV2DeidentifyContentResponse;
    public DlpProjectsLocationsContentDeidentifyResponse withGooglePrivacyDlpV2DeidentifyContentResponse(openapisdk.models.shared.GooglePrivacyDlpV2DeidentifyContentResponse googlePrivacyDlpV2DeidentifyContentResponse) {
        this.googlePrivacyDlpV2DeidentifyContentResponse = googlePrivacyDlpV2DeidentifyContentResponse;
        return this;
    }
    public Long statusCode;
    public DlpProjectsLocationsContentDeidentifyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}