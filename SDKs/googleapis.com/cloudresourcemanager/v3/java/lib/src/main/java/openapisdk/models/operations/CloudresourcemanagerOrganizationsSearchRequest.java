package openapisdk.models.operations;



public class CloudresourcemanagerOrganizationsSearchRequest {
    public CloudresourcemanagerOrganizationsSearchQueryParams queryParams;
    public CloudresourcemanagerOrganizationsSearchRequest withQueryParams(CloudresourcemanagerOrganizationsSearchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public CloudresourcemanagerOrganizationsSearchSecurity security;
    public CloudresourcemanagerOrganizationsSearchRequest withSecurity(CloudresourcemanagerOrganizationsSearchSecurity security) {
        this.security = security;
        return this;
    }
}