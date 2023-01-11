package openapisdk.models.operations;



public class CloudidentityInboundSamlSsoProfilesIdpCredentialsListRequest {
    public CloudidentityInboundSamlSsoProfilesIdpCredentialsListPathParams pathParams;
    public CloudidentityInboundSamlSsoProfilesIdpCredentialsListRequest withPathParams(CloudidentityInboundSamlSsoProfilesIdpCredentialsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CloudidentityInboundSamlSsoProfilesIdpCredentialsListQueryParams queryParams;
    public CloudidentityInboundSamlSsoProfilesIdpCredentialsListRequest withQueryParams(CloudidentityInboundSamlSsoProfilesIdpCredentialsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public CloudidentityInboundSamlSsoProfilesIdpCredentialsListSecurity security;
    public CloudidentityInboundSamlSsoProfilesIdpCredentialsListRequest withSecurity(CloudidentityInboundSamlSsoProfilesIdpCredentialsListSecurity security) {
        this.security = security;
        return this;
    }
}