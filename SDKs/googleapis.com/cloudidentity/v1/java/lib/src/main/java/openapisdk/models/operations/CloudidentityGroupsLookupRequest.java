package openapisdk.models.operations;



public class CloudidentityGroupsLookupRequest {
    public CloudidentityGroupsLookupQueryParams queryParams;
    public CloudidentityGroupsLookupRequest withQueryParams(CloudidentityGroupsLookupQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public CloudidentityGroupsLookupSecurity security;
    public CloudidentityGroupsLookupRequest withSecurity(CloudidentityGroupsLookupSecurity security) {
        this.security = security;
        return this;
    }
}