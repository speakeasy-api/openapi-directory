package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RemoveUserFromAccountRequest {
    public RemoveUserFromAccountPathParams pathParams;
    public RemoveUserFromAccountRequest withPathParams(RemoveUserFromAccountPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public RemoveUserFromAccountRequestBody request;
    public RemoveUserFromAccountRequest withRequest(RemoveUserFromAccountRequestBody request) {
        this.request = request;
        return this;
    }
}