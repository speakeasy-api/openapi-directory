package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateAccountOrganizationRequest {
    public UpdateAccountOrganizationPathParams pathParams;
    public UpdateAccountOrganizationRequest withPathParams(UpdateAccountOrganizationPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.OrgOptions request;
    public UpdateAccountOrganizationRequest withRequest(openapisdk.models.shared.OrgOptions request) {
        this.request = request;
        return this;
    }
    public UpdateAccountOrganizationSecurity security;
    public UpdateAccountOrganizationRequest withSecurity(UpdateAccountOrganizationSecurity security) {
        this.security = security;
        return this;
    }
}