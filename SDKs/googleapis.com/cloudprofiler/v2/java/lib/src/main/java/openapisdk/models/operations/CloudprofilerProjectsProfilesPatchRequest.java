package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudprofilerProjectsProfilesPatchRequest {
    public CloudprofilerProjectsProfilesPatchPathParams pathParams;
    public CloudprofilerProjectsProfilesPatchRequest withPathParams(CloudprofilerProjectsProfilesPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CloudprofilerProjectsProfilesPatchQueryParams queryParams;
    public CloudprofilerProjectsProfilesPatchRequest withQueryParams(CloudprofilerProjectsProfilesPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ProfileInput request;
    public CloudprofilerProjectsProfilesPatchRequest withRequest(openapisdk.models.shared.ProfileInput request) {
        this.request = request;
        return this;
    }
    public CloudprofilerProjectsProfilesPatchSecurity security;
    public CloudprofilerProjectsProfilesPatchRequest withSecurity(CloudprofilerProjectsProfilesPatchSecurity security) {
        this.security = security;
        return this;
    }
}