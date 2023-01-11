package openapisdk.models.operations;



public class DlpProjectsLocationsDeidentifyTemplatesListResponse {
    public String contentType;
    public DlpProjectsLocationsDeidentifyTemplatesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GooglePrivacyDlpV2ListDeidentifyTemplatesResponse googlePrivacyDlpV2ListDeidentifyTemplatesResponse;
    public DlpProjectsLocationsDeidentifyTemplatesListResponse withGooglePrivacyDlpV2ListDeidentifyTemplatesResponse(openapisdk.models.shared.GooglePrivacyDlpV2ListDeidentifyTemplatesResponse googlePrivacyDlpV2ListDeidentifyTemplatesResponse) {
        this.googlePrivacyDlpV2ListDeidentifyTemplatesResponse = googlePrivacyDlpV2ListDeidentifyTemplatesResponse;
        return this;
    }
    public Long statusCode;
    public DlpProjectsLocationsDeidentifyTemplatesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}