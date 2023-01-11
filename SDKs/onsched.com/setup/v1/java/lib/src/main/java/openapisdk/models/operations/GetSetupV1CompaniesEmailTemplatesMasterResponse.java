package openapisdk.models.operations;



public class GetSetupV1CompaniesEmailTemplatesMasterResponse {
    public String contentType;
    public GetSetupV1CompaniesEmailTemplatesMasterResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.MasterEmailTemplateSettingsViewModel masterEmailTemplateSettingsViewModel;
    public GetSetupV1CompaniesEmailTemplatesMasterResponse withMasterEmailTemplateSettingsViewModel(openapisdk.models.shared.MasterEmailTemplateSettingsViewModel masterEmailTemplateSettingsViewModel) {
        this.masterEmailTemplateSettingsViewModel = masterEmailTemplateSettingsViewModel;
        return this;
    }
    public Long statusCode;
    public GetSetupV1CompaniesEmailTemplatesMasterResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}