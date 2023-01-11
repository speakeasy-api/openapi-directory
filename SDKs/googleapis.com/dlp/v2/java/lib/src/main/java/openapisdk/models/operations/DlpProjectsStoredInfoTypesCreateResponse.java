package openapisdk.models.operations;



public class DlpProjectsStoredInfoTypesCreateResponse {
    public String contentType;
    public DlpProjectsStoredInfoTypesCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GooglePrivacyDlpV2StoredInfoType googlePrivacyDlpV2StoredInfoType;
    public DlpProjectsStoredInfoTypesCreateResponse withGooglePrivacyDlpV2StoredInfoType(openapisdk.models.shared.GooglePrivacyDlpV2StoredInfoType googlePrivacyDlpV2StoredInfoType) {
        this.googlePrivacyDlpV2StoredInfoType = googlePrivacyDlpV2StoredInfoType;
        return this;
    }
    public Long statusCode;
    public DlpProjectsStoredInfoTypesCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}