package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UserDetailsUpdateRequest {
    public UserDetailsUpdatePathParams pathParams;
    public UserDetailsUpdateRequest withPathParams(UserDetailsUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UserDetailsUpdateRequest request;
    public UserDetailsUpdateRequest withRequest(openapisdk.models.shared.UserDetailsUpdateRequest request) {
        this.request = request;
        return this;
    }
}