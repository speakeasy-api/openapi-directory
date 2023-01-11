package openapisdk.models.operations;



public class ResourcesettingsProjectsSettingsListRequest {
    public ResourcesettingsProjectsSettingsListPathParams pathParams;
    public ResourcesettingsProjectsSettingsListRequest withPathParams(ResourcesettingsProjectsSettingsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ResourcesettingsProjectsSettingsListQueryParams queryParams;
    public ResourcesettingsProjectsSettingsListRequest withQueryParams(ResourcesettingsProjectsSettingsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ResourcesettingsProjectsSettingsListSecurity security;
    public ResourcesettingsProjectsSettingsListRequest withSecurity(ResourcesettingsProjectsSettingsListSecurity security) {
        this.security = security;
        return this;
    }
}