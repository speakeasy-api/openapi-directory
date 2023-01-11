package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateAccountOrganizationRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.OrgOptions request;
    public CreateAccountOrganizationRequest withRequest(openapisdk.models.shared.OrgOptions request) {
        this.request = request;
        return this;
    }
    public CreateAccountOrganizationSecurity security;
    public CreateAccountOrganizationRequest withSecurity(CreateAccountOrganizationSecurity security) {
        this.security = security;
        return this;
    }
}