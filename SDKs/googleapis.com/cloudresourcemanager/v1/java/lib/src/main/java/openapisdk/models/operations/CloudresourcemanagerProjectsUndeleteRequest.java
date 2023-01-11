package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudresourcemanagerProjectsUndeleteRequest {
    public CloudresourcemanagerProjectsUndeletePathParams pathParams;
    public CloudresourcemanagerProjectsUndeleteRequest withPathParams(CloudresourcemanagerProjectsUndeletePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CloudresourcemanagerProjectsUndeleteQueryParams queryParams;
    public CloudresourcemanagerProjectsUndeleteRequest withQueryParams(CloudresourcemanagerProjectsUndeleteQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public CloudresourcemanagerProjectsUndeleteRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
    public CloudresourcemanagerProjectsUndeleteSecurity security;
    public CloudresourcemanagerProjectsUndeleteRequest withSecurity(CloudresourcemanagerProjectsUndeleteSecurity security) {
        this.security = security;
        return this;
    }
}