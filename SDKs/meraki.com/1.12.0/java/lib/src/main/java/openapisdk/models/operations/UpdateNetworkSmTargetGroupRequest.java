package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateNetworkSmTargetGroupRequest {
    public UpdateNetworkSmTargetGroupPathParams pathParams;
    public UpdateNetworkSmTargetGroupRequest withPathParams(UpdateNetworkSmTargetGroupPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateNetworkSmTargetGroupRequestBody request;
    public UpdateNetworkSmTargetGroupRequest withRequest(UpdateNetworkSmTargetGroupRequestBody request) {
        this.request = request;
        return this;
    }
}