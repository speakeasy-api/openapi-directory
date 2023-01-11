package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReposSetAppAccessRestrictionsRequest {
    public ReposSetAppAccessRestrictionsPathParams pathParams;
    public ReposSetAppAccessRestrictionsRequest withPathParams(ReposSetAppAccessRestrictionsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public ReposSetAppAccessRestrictionsRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
}