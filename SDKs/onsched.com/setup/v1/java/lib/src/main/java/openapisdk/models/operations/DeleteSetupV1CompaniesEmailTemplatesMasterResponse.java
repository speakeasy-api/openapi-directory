package openapisdk.models.operations;



public class DeleteSetupV1CompaniesEmailTemplatesMasterResponse {
    public String contentType;
    public DeleteSetupV1CompaniesEmailTemplatesMasterResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.MasterEmailTemplateSettingsViewModel masterEmailTemplateSettingsViewModel;
    public DeleteSetupV1CompaniesEmailTemplatesMasterResponse withMasterEmailTemplateSettingsViewModel(openapisdk.models.shared.MasterEmailTemplateSettingsViewModel masterEmailTemplateSettingsViewModel) {
        this.masterEmailTemplateSettingsViewModel = masterEmailTemplateSettingsViewModel;
        return this;
    }
    public Long statusCode;
    public DeleteSetupV1CompaniesEmailTemplatesMasterResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}