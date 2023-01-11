package openapisdk.models.operations;



public class FetchCompositionSettingsRequest {
    public String serverURL;
    public FetchCompositionSettingsRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchCompositionSettingsSecurity security;
    public FetchCompositionSettingsRequest withSecurity(FetchCompositionSettingsSecurity security) {
        this.security = security;
        return this;
    }
}