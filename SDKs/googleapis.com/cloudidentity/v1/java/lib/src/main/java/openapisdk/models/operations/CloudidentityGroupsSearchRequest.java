package openapisdk.models.operations;



public class CloudidentityGroupsSearchRequest {
    public CloudidentityGroupsSearchQueryParams queryParams;
    public CloudidentityGroupsSearchRequest withQueryParams(CloudidentityGroupsSearchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public CloudidentityGroupsSearchSecurity security;
    public CloudidentityGroupsSearchRequest withSecurity(CloudidentityGroupsSearchSecurity security) {
        this.security = security;
        return this;
    }
}