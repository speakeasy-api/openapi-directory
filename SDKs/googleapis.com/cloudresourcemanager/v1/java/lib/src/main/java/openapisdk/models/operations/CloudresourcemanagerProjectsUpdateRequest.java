package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudresourcemanagerProjectsUpdateRequest {
    public CloudresourcemanagerProjectsUpdatePathParams pathParams;
    public CloudresourcemanagerProjectsUpdateRequest withPathParams(CloudresourcemanagerProjectsUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CloudresourcemanagerProjectsUpdateQueryParams queryParams;
    public CloudresourcemanagerProjectsUpdateRequest withQueryParams(CloudresourcemanagerProjectsUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Project request;
    public CloudresourcemanagerProjectsUpdateRequest withRequest(openapisdk.models.shared.Project request) {
        this.request = request;
        return this;
    }
    public CloudresourcemanagerProjectsUpdateSecurity security;
    public CloudresourcemanagerProjectsUpdateRequest withSecurity(CloudresourcemanagerProjectsUpdateSecurity security) {
        this.security = security;
        return this;
    }
}