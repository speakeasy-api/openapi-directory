package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NodesForksCreateRequest {
    public NodesForksCreatePathParams pathParams;
    public NodesForksCreateRequest withPathParams(NodesForksCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public NodesForksCreateNodeInput request;
    public NodesForksCreateRequest withRequest(NodesForksCreateNodeInput request) {
        this.request = request;
        return this;
    }
}