package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudprofilerProjectsProfilesCreateRequest {
    public CloudprofilerProjectsProfilesCreatePathParams pathParams;
    public CloudprofilerProjectsProfilesCreateRequest withPathParams(CloudprofilerProjectsProfilesCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CloudprofilerProjectsProfilesCreateQueryParams queryParams;
    public CloudprofilerProjectsProfilesCreateRequest withQueryParams(CloudprofilerProjectsProfilesCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateProfileRequest request;
    public CloudprofilerProjectsProfilesCreateRequest withRequest(openapisdk.models.shared.CreateProfileRequest request) {
        this.request = request;
        return this;
    }
    public CloudprofilerProjectsProfilesCreateSecurity security;
    public CloudprofilerProjectsProfilesCreateRequest withSecurity(CloudprofilerProjectsProfilesCreateSecurity security) {
        this.security = security;
        return this;
    }
}