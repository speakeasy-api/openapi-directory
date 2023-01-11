package openapisdk.models.operations;



public class CloudresourcemanagerTagBindingsListRequest {
    public CloudresourcemanagerTagBindingsListQueryParams queryParams;
    public CloudresourcemanagerTagBindingsListRequest withQueryParams(CloudresourcemanagerTagBindingsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public CloudresourcemanagerTagBindingsListSecurity security;
    public CloudresourcemanagerTagBindingsListRequest withSecurity(CloudresourcemanagerTagBindingsListSecurity security) {
        this.security = security;
        return this;
    }
}