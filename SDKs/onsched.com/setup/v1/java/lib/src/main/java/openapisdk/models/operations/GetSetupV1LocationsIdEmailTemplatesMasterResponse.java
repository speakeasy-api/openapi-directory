package openapisdk.models.operations;



public class GetSetupV1LocationsIdEmailTemplatesMasterResponse {
    public String contentType;
    public GetSetupV1LocationsIdEmailTemplatesMasterResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.MasterEmailTemplateSettingsViewModel masterEmailTemplateSettingsViewModel;
    public GetSetupV1LocationsIdEmailTemplatesMasterResponse withMasterEmailTemplateSettingsViewModel(openapisdk.models.shared.MasterEmailTemplateSettingsViewModel masterEmailTemplateSettingsViewModel) {
        this.masterEmailTemplateSettingsViewModel = masterEmailTemplateSettingsViewModel;
        return this;
    }
    public Long statusCode;
    public GetSetupV1LocationsIdEmailTemplatesMasterResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}