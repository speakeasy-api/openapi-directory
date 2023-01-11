package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateNetworkClientPolicyRequest {
    public UpdateNetworkClientPolicyPathParams pathParams;
    public UpdateNetworkClientPolicyRequest withPathParams(UpdateNetworkClientPolicyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateNetworkClientPolicyRequestBody request;
    public UpdateNetworkClientPolicyRequest withRequest(UpdateNetworkClientPolicyRequestBody request) {
        this.request = request;
        return this;
    }
}