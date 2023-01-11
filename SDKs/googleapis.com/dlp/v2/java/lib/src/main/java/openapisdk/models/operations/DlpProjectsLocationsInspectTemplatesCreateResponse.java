package openapisdk.models.operations;



public class DlpProjectsLocationsInspectTemplatesCreateResponse {
    public String contentType;
    public DlpProjectsLocationsInspectTemplatesCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GooglePrivacyDlpV2InspectTemplate googlePrivacyDlpV2InspectTemplate;
    public DlpProjectsLocationsInspectTemplatesCreateResponse withGooglePrivacyDlpV2InspectTemplate(openapisdk.models.shared.GooglePrivacyDlpV2InspectTemplate googlePrivacyDlpV2InspectTemplate) {
        this.googlePrivacyDlpV2InspectTemplate = googlePrivacyDlpV2InspectTemplate;
        return this;
    }
    public Long statusCode;
    public DlpProjectsLocationsInspectTemplatesCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}