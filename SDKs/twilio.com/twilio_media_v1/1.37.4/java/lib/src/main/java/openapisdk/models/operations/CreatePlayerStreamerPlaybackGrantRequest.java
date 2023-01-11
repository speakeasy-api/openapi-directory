package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreatePlayerStreamerPlaybackGrantRequest {
    public String serverURL;
    public CreatePlayerStreamerPlaybackGrantRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public CreatePlayerStreamerPlaybackGrantPathParams pathParams;
    public CreatePlayerStreamerPlaybackGrantRequest withPathParams(CreatePlayerStreamerPlaybackGrantPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreatePlayerStreamerPlaybackGrantCreatePlayerStreamerPlaybackGrantRequest request;
    public CreatePlayerStreamerPlaybackGrantRequest withRequest(CreatePlayerStreamerPlaybackGrantCreatePlayerStreamerPlaybackGrantRequest request) {
        this.request = request;
        return this;
    }
    public CreatePlayerStreamerPlaybackGrantSecurity security;
    public CreatePlayerStreamerPlaybackGrantRequest withSecurity(CreatePlayerStreamerPlaybackGrantSecurity security) {
        this.security = security;
        return this;
    }
}