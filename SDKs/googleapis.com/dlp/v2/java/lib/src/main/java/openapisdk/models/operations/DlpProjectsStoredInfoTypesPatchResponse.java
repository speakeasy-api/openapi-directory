package openapisdk.models.operations;



public class DlpProjectsStoredInfoTypesPatchResponse {
    public String contentType;
    public DlpProjectsStoredInfoTypesPatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GooglePrivacyDlpV2StoredInfoType googlePrivacyDlpV2StoredInfoType;
    public DlpProjectsStoredInfoTypesPatchResponse withGooglePrivacyDlpV2StoredInfoType(openapisdk.models.shared.GooglePrivacyDlpV2StoredInfoType googlePrivacyDlpV2StoredInfoType) {
        this.googlePrivacyDlpV2StoredInfoType = googlePrivacyDlpV2StoredInfoType;
        return this;
    }
    public Long statusCode;
    public DlpProjectsStoredInfoTypesPatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}