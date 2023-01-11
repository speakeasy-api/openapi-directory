package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostPlaylistsRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateUpdatePlaylistRequest request;
    public PostPlaylistsRequest withRequest(openapisdk.models.shared.CreateUpdatePlaylistRequest request) {
        this.request = request;
        return this;
    }
    public PostPlaylistsSecurity security;
    public PostPlaylistsRequest withSecurity(PostPlaylistsSecurity security) {
        this.security = security;
        return this;
    }
}