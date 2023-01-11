package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateNetworkMerakiAuthUserRequest {
    public UpdateNetworkMerakiAuthUserPathParams pathParams;
    public UpdateNetworkMerakiAuthUserRequest withPathParams(UpdateNetworkMerakiAuthUserPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateNetworkMerakiAuthUserRequestBody request;
    public UpdateNetworkMerakiAuthUserRequest withRequest(UpdateNetworkMerakiAuthUserRequestBody request) {
        this.request = request;
        return this;
    }
}