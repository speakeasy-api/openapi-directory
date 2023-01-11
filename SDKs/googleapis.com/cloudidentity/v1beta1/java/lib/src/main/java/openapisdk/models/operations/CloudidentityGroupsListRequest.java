package openapisdk.models.operations;



public class CloudidentityGroupsListRequest {
    public CloudidentityGroupsListQueryParams queryParams;
    public CloudidentityGroupsListRequest withQueryParams(CloudidentityGroupsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public CloudidentityGroupsListSecurity security;
    public CloudidentityGroupsListRequest withSecurity(CloudidentityGroupsListSecurity security) {
        this.security = security;
        return this;
    }
}