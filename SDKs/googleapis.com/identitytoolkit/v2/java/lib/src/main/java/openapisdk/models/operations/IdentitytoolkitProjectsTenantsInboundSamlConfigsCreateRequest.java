package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IdentitytoolkitProjectsTenantsInboundSamlConfigsCreateRequest {
    public IdentitytoolkitProjectsTenantsInboundSamlConfigsCreatePathParams pathParams;
    public IdentitytoolkitProjectsTenantsInboundSamlConfigsCreateRequest withPathParams(IdentitytoolkitProjectsTenantsInboundSamlConfigsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public IdentitytoolkitProjectsTenantsInboundSamlConfigsCreateQueryParams queryParams;
    public IdentitytoolkitProjectsTenantsInboundSamlConfigsCreateRequest withQueryParams(IdentitytoolkitProjectsTenantsInboundSamlConfigsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleCloudIdentitytoolkitAdminV2InboundSamlConfigInput request;
    public IdentitytoolkitProjectsTenantsInboundSamlConfigsCreateRequest withRequest(openapisdk.models.shared.GoogleCloudIdentitytoolkitAdminV2InboundSamlConfigInput request) {
        this.request = request;
        return this;
    }
    public IdentitytoolkitProjectsTenantsInboundSamlConfigsCreateSecurity security;
    public IdentitytoolkitProjectsTenantsInboundSamlConfigsCreateRequest withSecurity(IdentitytoolkitProjectsTenantsInboundSamlConfigsCreateSecurity security) {
        this.security = security;
        return this;
    }
}