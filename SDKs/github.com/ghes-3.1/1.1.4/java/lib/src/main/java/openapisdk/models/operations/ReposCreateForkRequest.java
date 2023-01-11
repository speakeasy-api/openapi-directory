package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReposCreateForkRequest {
    public ReposCreateForkPathParams pathParams;
    public ReposCreateForkRequest withPathParams(ReposCreateForkPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ReposCreateForkRequestBody request;
    public ReposCreateForkRequest withRequest(ReposCreateForkRequestBody request) {
        this.request = request;
        return this;
    }
}