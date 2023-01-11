package openapisdk.models.operations;



public class DlpProjectsLocationsDeidentifyTemplatesCreateResponse {
    public String contentType;
    public DlpProjectsLocationsDeidentifyTemplatesCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GooglePrivacyDlpV2DeidentifyTemplate googlePrivacyDlpV2DeidentifyTemplate;
    public DlpProjectsLocationsDeidentifyTemplatesCreateResponse withGooglePrivacyDlpV2DeidentifyTemplate(openapisdk.models.shared.GooglePrivacyDlpV2DeidentifyTemplate googlePrivacyDlpV2DeidentifyTemplate) {
        this.googlePrivacyDlpV2DeidentifyTemplate = googlePrivacyDlpV2DeidentifyTemplate;
        return this;
    }
    public Long statusCode;
    public DlpProjectsLocationsDeidentifyTemplatesCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}