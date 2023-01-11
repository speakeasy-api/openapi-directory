package openapisdk.models.operations;



public class DlpProjectsLocationsInspectTemplatesListResponse {
    public String contentType;
    public DlpProjectsLocationsInspectTemplatesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GooglePrivacyDlpV2ListInspectTemplatesResponse googlePrivacyDlpV2ListInspectTemplatesResponse;
    public DlpProjectsLocationsInspectTemplatesListResponse withGooglePrivacyDlpV2ListInspectTemplatesResponse(openapisdk.models.shared.GooglePrivacyDlpV2ListInspectTemplatesResponse googlePrivacyDlpV2ListInspectTemplatesResponse) {
        this.googlePrivacyDlpV2ListInspectTemplatesResponse = googlePrivacyDlpV2ListInspectTemplatesResponse;
        return this;
    }
    public Long statusCode;
    public DlpProjectsLocationsInspectTemplatesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}