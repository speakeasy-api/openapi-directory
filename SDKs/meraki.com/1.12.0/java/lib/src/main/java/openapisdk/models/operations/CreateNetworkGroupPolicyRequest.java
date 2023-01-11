package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateNetworkGroupPolicyRequest {
    public CreateNetworkGroupPolicyPathParams pathParams;
    public CreateNetworkGroupPolicyRequest withPathParams(CreateNetworkGroupPolicyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateNetworkGroupPolicyRequestBody request;
    public CreateNetworkGroupPolicyRequest withRequest(CreateNetworkGroupPolicyRequestBody request) {
        this.request = request;
        return this;
    }
}