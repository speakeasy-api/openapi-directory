package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateNodeRequest {
    public UpdateNodePathParams pathParams;
    public UpdateNodeRequest withPathParams(UpdateNodePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.NodeSettings request;
    public UpdateNodeRequest withRequest(openapisdk.models.shared.NodeSettings request) {
        this.request = request;
        return this;
    }
}