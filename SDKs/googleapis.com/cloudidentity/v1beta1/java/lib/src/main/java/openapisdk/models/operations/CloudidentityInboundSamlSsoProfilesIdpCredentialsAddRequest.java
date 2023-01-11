package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudidentityInboundSamlSsoProfilesIdpCredentialsAddRequest {
    public CloudidentityInboundSamlSsoProfilesIdpCredentialsAddPathParams pathParams;
    public CloudidentityInboundSamlSsoProfilesIdpCredentialsAddRequest withPathParams(CloudidentityInboundSamlSsoProfilesIdpCredentialsAddPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CloudidentityInboundSamlSsoProfilesIdpCredentialsAddQueryParams queryParams;
    public CloudidentityInboundSamlSsoProfilesIdpCredentialsAddRequest withQueryParams(CloudidentityInboundSamlSsoProfilesIdpCredentialsAddQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AddIdpCredentialRequest request;
    public CloudidentityInboundSamlSsoProfilesIdpCredentialsAddRequest withRequest(openapisdk.models.shared.AddIdpCredentialRequest request) {
        this.request = request;
        return this;
    }
    public CloudidentityInboundSamlSsoProfilesIdpCredentialsAddSecurity security;
    public CloudidentityInboundSamlSsoProfilesIdpCredentialsAddRequest withSecurity(CloudidentityInboundSamlSsoProfilesIdpCredentialsAddSecurity security) {
        this.security = security;
        return this;
    }
}