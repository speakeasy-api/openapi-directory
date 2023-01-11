package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateNetworkSmTargetGroupRequest {
    public CreateNetworkSmTargetGroupPathParams pathParams;
    public CreateNetworkSmTargetGroupRequest withPathParams(CreateNetworkSmTargetGroupPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateNetworkSmTargetGroupRequestBody request;
    public CreateNetworkSmTargetGroupRequest withRequest(CreateNetworkSmTargetGroupRequestBody request) {
        this.request = request;
        return this;
    }
}