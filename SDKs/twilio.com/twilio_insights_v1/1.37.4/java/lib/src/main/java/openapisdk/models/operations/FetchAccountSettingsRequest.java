package openapisdk.models.operations;



public class FetchAccountSettingsRequest {
    public String serverURL;
    public FetchAccountSettingsRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchAccountSettingsQueryParams queryParams;
    public FetchAccountSettingsRequest withQueryParams(FetchAccountSettingsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public FetchAccountSettingsSecurity security;
    public FetchAccountSettingsRequest withSecurity(FetchAccountSettingsSecurity security) {
        this.security = security;
        return this;
    }
}