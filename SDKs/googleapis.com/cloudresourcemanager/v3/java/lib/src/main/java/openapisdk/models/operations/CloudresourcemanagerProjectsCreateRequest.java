package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudresourcemanagerProjectsCreateRequest {
    public CloudresourcemanagerProjectsCreateQueryParams queryParams;
    public CloudresourcemanagerProjectsCreateRequest withQueryParams(CloudresourcemanagerProjectsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ProjectInput request;
    public CloudresourcemanagerProjectsCreateRequest withRequest(openapisdk.models.shared.ProjectInput request) {
        this.request = request;
        return this;
    }
    public CloudresourcemanagerProjectsCreateSecurity security;
    public CloudresourcemanagerProjectsCreateRequest withSecurity(CloudresourcemanagerProjectsCreateSecurity security) {
        this.security = security;
        return this;
    }
}