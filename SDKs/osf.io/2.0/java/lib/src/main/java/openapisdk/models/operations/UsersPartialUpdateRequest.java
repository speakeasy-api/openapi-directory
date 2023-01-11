package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UsersPartialUpdateRequest {
    public UsersPartialUpdatePathParams pathParams;
    public UsersPartialUpdateRequest withPathParams(UsersPartialUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UsersPartialUpdateUserInput request;
    public UsersPartialUpdateRequest withRequest(UsersPartialUpdateUserInput request) {
        this.request = request;
        return this;
    }
}