package openapisdk.models.operations;



public class DlpProjectsLocationsImageRedactResponse {
    public String contentType;
    public DlpProjectsLocationsImageRedactResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GooglePrivacyDlpV2RedactImageResponse googlePrivacyDlpV2RedactImageResponse;
    public DlpProjectsLocationsImageRedactResponse withGooglePrivacyDlpV2RedactImageResponse(openapisdk.models.shared.GooglePrivacyDlpV2RedactImageResponse googlePrivacyDlpV2RedactImageResponse) {
        this.googlePrivacyDlpV2RedactImageResponse = googlePrivacyDlpV2RedactImageResponse;
        return this;
    }
    public Long statusCode;
    public DlpProjectsLocationsImageRedactResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}