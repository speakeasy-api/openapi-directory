package openapisdk.models.operations;



public class DlpLocationsInfoTypesListResponse {
    public String contentType;
    public DlpLocationsInfoTypesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GooglePrivacyDlpV2ListInfoTypesResponse googlePrivacyDlpV2ListInfoTypesResponse;
    public DlpLocationsInfoTypesListResponse withGooglePrivacyDlpV2ListInfoTypesResponse(openapisdk.models.shared.GooglePrivacyDlpV2ListInfoTypesResponse googlePrivacyDlpV2ListInfoTypesResponse) {
        this.googlePrivacyDlpV2ListInfoTypesResponse = googlePrivacyDlpV2ListInfoTypesResponse;
        return this;
    }
    public Long statusCode;
    public DlpLocationsInfoTypesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}