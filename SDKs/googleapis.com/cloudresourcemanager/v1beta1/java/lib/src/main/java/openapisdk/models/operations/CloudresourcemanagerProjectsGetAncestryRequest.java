package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudresourcemanagerProjectsGetAncestryRequest {
    public CloudresourcemanagerProjectsGetAncestryPathParams pathParams;
    public CloudresourcemanagerProjectsGetAncestryRequest withPathParams(CloudresourcemanagerProjectsGetAncestryPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CloudresourcemanagerProjectsGetAncestryQueryParams queryParams;
    public CloudresourcemanagerProjectsGetAncestryRequest withQueryParams(CloudresourcemanagerProjectsGetAncestryQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public CloudresourcemanagerProjectsGetAncestryRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
    public CloudresourcemanagerProjectsGetAncestrySecurity security;
    public CloudresourcemanagerProjectsGetAncestryRequest withSecurity(CloudresourcemanagerProjectsGetAncestrySecurity security) {
        this.security = security;
        return this;
    }
}