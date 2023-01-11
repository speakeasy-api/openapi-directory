package openapisdk.models.operations;



public class FetchDialingPermissionsSettingsRequest {
    public String serverURL;
    public FetchDialingPermissionsSettingsRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchDialingPermissionsSettingsSecurity security;
    public FetchDialingPermissionsSettingsRequest withSecurity(FetchDialingPermissionsSettingsSecurity security) {
        this.security = security;
        return this;
    }
}