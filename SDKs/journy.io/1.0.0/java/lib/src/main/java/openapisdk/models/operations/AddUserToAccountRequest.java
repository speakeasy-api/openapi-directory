package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddUserToAccountRequest {
    public AddUserToAccountPathParams pathParams;
    public AddUserToAccountRequest withPathParams(AddUserToAccountPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public AddUserToAccountRequestBody request;
    public AddUserToAccountRequest withRequest(AddUserToAccountRequestBody request) {
        this.request = request;
        return this;
    }
}