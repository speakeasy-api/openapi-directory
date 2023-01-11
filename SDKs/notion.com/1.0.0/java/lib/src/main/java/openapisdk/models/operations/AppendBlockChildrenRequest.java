package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AppendBlockChildrenRequest {
    public AppendBlockChildrenPathParams pathParams;
    public AppendBlockChildrenRequest withPathParams(AppendBlockChildrenPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public AppendBlockChildrenRequestBody request;
    public AppendBlockChildrenRequest withRequest(AppendBlockChildrenRequestBody request) {
        this.request = request;
        return this;
    }
}