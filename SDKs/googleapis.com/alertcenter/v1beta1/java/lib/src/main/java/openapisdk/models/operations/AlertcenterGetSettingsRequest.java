package openapisdk.models.operations;



public class AlertcenterGetSettingsRequest {
    public AlertcenterGetSettingsQueryParams queryParams;
    public AlertcenterGetSettingsRequest withQueryParams(AlertcenterGetSettingsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public AlertcenterGetSettingsSecurity security;
    public AlertcenterGetSettingsRequest withSecurity(AlertcenterGetSettingsSecurity security) {
        this.security = security;
        return this;
    }
}