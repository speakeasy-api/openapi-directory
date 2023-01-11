package openapisdk.models.operations;



public class DeleteSetupV1LocationsIdEmailTemplatesMasterResponse {
    public String contentType;
    public DeleteSetupV1LocationsIdEmailTemplatesMasterResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.MasterEmailTemplateSettingsViewModel masterEmailTemplateSettingsViewModel;
    public DeleteSetupV1LocationsIdEmailTemplatesMasterResponse withMasterEmailTemplateSettingsViewModel(openapisdk.models.shared.MasterEmailTemplateSettingsViewModel masterEmailTemplateSettingsViewModel) {
        this.masterEmailTemplateSettingsViewModel = masterEmailTemplateSettingsViewModel;
        return this;
    }
    public Long statusCode;
    public DeleteSetupV1LocationsIdEmailTemplatesMasterResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}