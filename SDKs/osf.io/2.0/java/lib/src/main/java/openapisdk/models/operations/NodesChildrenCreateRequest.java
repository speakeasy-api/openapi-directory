package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NodesChildrenCreateRequest {
    public NodesChildrenCreatePathParams pathParams;
    public NodesChildrenCreateRequest withPathParams(NodesChildrenCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public NodesChildrenCreateNodeInput request;
    public NodesChildrenCreateRequest withRequest(NodesChildrenCreateNodeInput request) {
        this.request = request;
        return this;
    }
}