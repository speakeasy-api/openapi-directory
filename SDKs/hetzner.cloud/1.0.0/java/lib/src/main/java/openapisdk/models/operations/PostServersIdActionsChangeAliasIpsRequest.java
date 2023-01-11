package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostServersIdActionsChangeAliasIpsRequest {
    public PostServersIdActionsChangeAliasIpsPathParams pathParams;
    public PostServersIdActionsChangeAliasIpsRequest withPathParams(PostServersIdActionsChangeAliasIpsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PostServersIdActionsChangeAliasIpsRequestBody request;
    public PostServersIdActionsChangeAliasIpsRequest withRequest(PostServersIdActionsChangeAliasIpsRequestBody request) {
        this.request = request;
        return this;
    }
}