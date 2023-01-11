package openapisdk.models.operations;



public class ToolresultsProjectsGetSettingsRequest {
    public ToolresultsProjectsGetSettingsPathParams pathParams;
    public ToolresultsProjectsGetSettingsRequest withPathParams(ToolresultsProjectsGetSettingsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ToolresultsProjectsGetSettingsQueryParams queryParams;
    public ToolresultsProjectsGetSettingsRequest withQueryParams(ToolresultsProjectsGetSettingsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ToolresultsProjectsGetSettingsSecurity security;
    public ToolresultsProjectsGetSettingsRequest withSecurity(ToolresultsProjectsGetSettingsSecurity security) {
        this.security = security;
        return this;
    }
}