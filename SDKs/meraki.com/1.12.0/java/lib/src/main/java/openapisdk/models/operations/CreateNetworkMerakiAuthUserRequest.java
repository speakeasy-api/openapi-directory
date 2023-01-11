package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateNetworkMerakiAuthUserRequest {
    public CreateNetworkMerakiAuthUserPathParams pathParams;
    public CreateNetworkMerakiAuthUserRequest withPathParams(CreateNetworkMerakiAuthUserPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateNetworkMerakiAuthUserRequestBody request;
    public CreateNetworkMerakiAuthUserRequest withRequest(CreateNetworkMerakiAuthUserRequestBody request) {
        this.request = request;
        return this;
    }
}