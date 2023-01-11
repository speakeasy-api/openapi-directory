package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateNetworkApplianceSecurityIntrusionRequest {
    public UpdateNetworkApplianceSecurityIntrusionPathParams pathParams;
    public UpdateNetworkApplianceSecurityIntrusionRequest withPathParams(UpdateNetworkApplianceSecurityIntrusionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateNetworkApplianceSecurityIntrusionRequestBody request;
    public UpdateNetworkApplianceSecurityIntrusionRequest withRequest(UpdateNetworkApplianceSecurityIntrusionRequestBody request) {
        this.request = request;
        return this;
    }
}