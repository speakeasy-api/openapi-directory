package openapisdk.models.operations;



public class CloudresourcemanagerProjectsListRequest {
    public CloudresourcemanagerProjectsListQueryParams queryParams;
    public CloudresourcemanagerProjectsListRequest withQueryParams(CloudresourcemanagerProjectsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public CloudresourcemanagerProjectsListSecurity security;
    public CloudresourcemanagerProjectsListRequest withSecurity(CloudresourcemanagerProjectsListSecurity security) {
        this.security = security;
        return this;
    }
}