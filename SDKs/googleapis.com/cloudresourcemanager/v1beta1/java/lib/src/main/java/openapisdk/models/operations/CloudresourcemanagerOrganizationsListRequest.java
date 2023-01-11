package openapisdk.models.operations;



public class CloudresourcemanagerOrganizationsListRequest {
    public CloudresourcemanagerOrganizationsListQueryParams queryParams;
    public CloudresourcemanagerOrganizationsListRequest withQueryParams(CloudresourcemanagerOrganizationsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public CloudresourcemanagerOrganizationsListSecurity security;
    public CloudresourcemanagerOrganizationsListRequest withSecurity(CloudresourcemanagerOrganizationsListSecurity security) {
        this.security = security;
        return this;
    }
}