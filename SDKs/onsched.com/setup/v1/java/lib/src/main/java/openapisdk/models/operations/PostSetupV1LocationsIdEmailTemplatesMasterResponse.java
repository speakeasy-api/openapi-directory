package openapisdk.models.operations;



public class PostSetupV1LocationsIdEmailTemplatesMasterResponse {
    public String contentType;
    public PostSetupV1LocationsIdEmailTemplatesMasterResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.MasterEmailTemplateSettingsViewModel masterEmailTemplateSettingsViewModel;
    public PostSetupV1LocationsIdEmailTemplatesMasterResponse withMasterEmailTemplateSettingsViewModel(openapisdk.models.shared.MasterEmailTemplateSettingsViewModel masterEmailTemplateSettingsViewModel) {
        this.masterEmailTemplateSettingsViewModel = masterEmailTemplateSettingsViewModel;
        return this;
    }
    public Long statusCode;
    public PostSetupV1LocationsIdEmailTemplatesMasterResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}