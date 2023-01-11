package openapisdk.models.operations;



public class CloudresourcemanagerProjectsSearchRequest {
    public CloudresourcemanagerProjectsSearchQueryParams queryParams;
    public CloudresourcemanagerProjectsSearchRequest withQueryParams(CloudresourcemanagerProjectsSearchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public CloudresourcemanagerProjectsSearchSecurity security;
    public CloudresourcemanagerProjectsSearchRequest withSecurity(CloudresourcemanagerProjectsSearchSecurity security) {
        this.security = security;
        return this;
    }
}