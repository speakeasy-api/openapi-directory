package openapisdk.models.operations;



public class CloudidentityInboundSamlSsoProfilesListRequest {
    public CloudidentityInboundSamlSsoProfilesListQueryParams queryParams;
    public CloudidentityInboundSamlSsoProfilesListRequest withQueryParams(CloudidentityInboundSamlSsoProfilesListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public CloudidentityInboundSamlSsoProfilesListSecurity security;
    public CloudidentityInboundSamlSsoProfilesListRequest withSecurity(CloudidentityInboundSamlSsoProfilesListSecurity security) {
        this.security = security;
        return this;
    }
}