package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddChannelModeratorsRequest {
    public AddChannelModeratorsPathParams pathParams;
    public AddChannelModeratorsRequest withPathParams(AddChannelModeratorsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public AddChannelModeratorsRequestBody request;
    public AddChannelModeratorsRequest withRequest(AddChannelModeratorsRequestBody request) {
        this.request = request;
        return this;
    }
    public AddChannelModeratorsSecurity security;
    public AddChannelModeratorsRequest withSecurity(AddChannelModeratorsSecurity security) {
        this.security = security;
        return this;
    }
}