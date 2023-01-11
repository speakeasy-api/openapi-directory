package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudprofilerProjectsProfilesCreateOfflineRequest {
    public CloudprofilerProjectsProfilesCreateOfflinePathParams pathParams;
    public CloudprofilerProjectsProfilesCreateOfflineRequest withPathParams(CloudprofilerProjectsProfilesCreateOfflinePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CloudprofilerProjectsProfilesCreateOfflineQueryParams queryParams;
    public CloudprofilerProjectsProfilesCreateOfflineRequest withQueryParams(CloudprofilerProjectsProfilesCreateOfflineQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ProfileInput request;
    public CloudprofilerProjectsProfilesCreateOfflineRequest withRequest(openapisdk.models.shared.ProfileInput request) {
        this.request = request;
        return this;
    }
    public CloudprofilerProjectsProfilesCreateOfflineSecurity security;
    public CloudprofilerProjectsProfilesCreateOfflineRequest withSecurity(CloudprofilerProjectsProfilesCreateOfflineSecurity security) {
        this.security = security;
        return this;
    }
}