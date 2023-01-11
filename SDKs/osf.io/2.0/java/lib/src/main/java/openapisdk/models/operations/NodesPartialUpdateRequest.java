package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NodesPartialUpdateRequest {
    public NodesPartialUpdatePathParams pathParams;
    public NodesPartialUpdateRequest withPathParams(NodesPartialUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public NodesPartialUpdateRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
}