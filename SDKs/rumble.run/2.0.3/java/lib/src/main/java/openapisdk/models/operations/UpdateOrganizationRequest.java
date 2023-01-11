package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateOrganizationRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.OrgOptions request;
    public UpdateOrganizationRequest withRequest(openapisdk.models.shared.OrgOptions request) {
        this.request = request;
        return this;
    }
    public UpdateOrganizationSecurity security;
    public UpdateOrganizationRequest withSecurity(UpdateOrganizationSecurity security) {
        this.security = security;
        return this;
    }
}