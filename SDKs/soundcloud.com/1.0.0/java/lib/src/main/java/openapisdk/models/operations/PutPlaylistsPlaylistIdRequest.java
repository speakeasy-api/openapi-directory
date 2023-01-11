package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutPlaylistsPlaylistIdRequest {
    public PutPlaylistsPlaylistIdPathParams pathParams;
    public PutPlaylistsPlaylistIdRequest withPathParams(PutPlaylistsPlaylistIdPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateUpdatePlaylistRequest request;
    public PutPlaylistsPlaylistIdRequest withRequest(openapisdk.models.shared.CreateUpdatePlaylistRequest request) {
        this.request = request;
        return this;
    }
    public PutPlaylistsPlaylistIdSecurity security;
    public PutPlaylistsPlaylistIdRequest withSecurity(PutPlaylistsPlaylistIdSecurity security) {
        this.security = security;
        return this;
    }
}