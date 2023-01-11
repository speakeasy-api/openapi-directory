package openapisdk.models.operations;



public class DlpInfoTypesListResponse {
    public String contentType;
    public DlpInfoTypesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GooglePrivacyDlpV2ListInfoTypesResponse googlePrivacyDlpV2ListInfoTypesResponse;
    public DlpInfoTypesListResponse withGooglePrivacyDlpV2ListInfoTypesResponse(openapisdk.models.shared.GooglePrivacyDlpV2ListInfoTypesResponse googlePrivacyDlpV2ListInfoTypesResponse) {
        this.googlePrivacyDlpV2ListInfoTypesResponse = googlePrivacyDlpV2ListInfoTypesResponse;
        return this;
    }
    public Long statusCode;
    public DlpInfoTypesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}