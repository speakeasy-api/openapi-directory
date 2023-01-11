package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateOrganizationApplianceSecurityIntrusionRequest {
    public UpdateOrganizationApplianceSecurityIntrusionPathParams pathParams;
    public UpdateOrganizationApplianceSecurityIntrusionRequest withPathParams(UpdateOrganizationApplianceSecurityIntrusionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateOrganizationApplianceSecurityIntrusionRequestBody request;
    public UpdateOrganizationApplianceSecurityIntrusionRequest withRequest(UpdateOrganizationApplianceSecurityIntrusionRequestBody request) {
        this.request = request;
        return this;
    }
}