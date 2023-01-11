package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateNetworkGroupPolicyRequest {
    public UpdateNetworkGroupPolicyPathParams pathParams;
    public UpdateNetworkGroupPolicyRequest withPathParams(UpdateNetworkGroupPolicyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateNetworkGroupPolicyRequestBody request;
    public UpdateNetworkGroupPolicyRequest withRequest(UpdateNetworkGroupPolicyRequestBody request) {
        this.request = request;
        return this;
    }
}