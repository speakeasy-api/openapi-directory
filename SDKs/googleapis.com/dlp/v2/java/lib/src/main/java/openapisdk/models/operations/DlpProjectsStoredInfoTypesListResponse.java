package openapisdk.models.operations;



public class DlpProjectsStoredInfoTypesListResponse {
    public String contentType;
    public DlpProjectsStoredInfoTypesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GooglePrivacyDlpV2ListStoredInfoTypesResponse googlePrivacyDlpV2ListStoredInfoTypesResponse;
    public DlpProjectsStoredInfoTypesListResponse withGooglePrivacyDlpV2ListStoredInfoTypesResponse(openapisdk.models.shared.GooglePrivacyDlpV2ListStoredInfoTypesResponse googlePrivacyDlpV2ListStoredInfoTypesResponse) {
        this.googlePrivacyDlpV2ListStoredInfoTypesResponse = googlePrivacyDlpV2ListStoredInfoTypesResponse;
        return this;
    }
    public Long statusCode;
    public DlpProjectsStoredInfoTypesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}