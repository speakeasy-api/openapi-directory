package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ResourcesettingsProjectsSettingsPatchRequest {
    public ResourcesettingsProjectsSettingsPatchPathParams pathParams;
    public ResourcesettingsProjectsSettingsPatchRequest withPathParams(ResourcesettingsProjectsSettingsPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ResourcesettingsProjectsSettingsPatchQueryParams queryParams;
    public ResourcesettingsProjectsSettingsPatchRequest withQueryParams(ResourcesettingsProjectsSettingsPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleCloudResourcesettingsV1Setting request;
    public ResourcesettingsProjectsSettingsPatchRequest withRequest(openapisdk.models.shared.GoogleCloudResourcesettingsV1Setting request) {
        this.request = request;
        return this;
    }
    public ResourcesettingsProjectsSettingsPatchSecurity security;
    public ResourcesettingsProjectsSettingsPatchRequest withSecurity(ResourcesettingsProjectsSettingsPatchSecurity security) {
        this.security = security;
        return this;
    }
}