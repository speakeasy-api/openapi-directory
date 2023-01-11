package openapisdk.models.operations;



public class DlpProjectsStoredInfoTypesGetResponse {
    public String contentType;
    public DlpProjectsStoredInfoTypesGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GooglePrivacyDlpV2StoredInfoType googlePrivacyDlpV2StoredInfoType;
    public DlpProjectsStoredInfoTypesGetResponse withGooglePrivacyDlpV2StoredInfoType(openapisdk.models.shared.GooglePrivacyDlpV2StoredInfoType googlePrivacyDlpV2StoredInfoType) {
        this.googlePrivacyDlpV2StoredInfoType = googlePrivacyDlpV2StoredInfoType;
        return this;
    }
    public Long statusCode;
    public DlpProjectsStoredInfoTypesGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}