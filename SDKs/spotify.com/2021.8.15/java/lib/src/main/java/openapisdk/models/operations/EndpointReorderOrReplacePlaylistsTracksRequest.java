package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EndpointReorderOrReplacePlaylistsTracksRequest {
    public EndpointReorderOrReplacePlaylistsTracksPathParams pathParams;
    public EndpointReorderOrReplacePlaylistsTracksRequest withPathParams(EndpointReorderOrReplacePlaylistsTracksPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public EndpointReorderOrReplacePlaylistsTracksQueryParams queryParams;
    public EndpointReorderOrReplacePlaylistsTracksRequest withQueryParams(EndpointReorderOrReplacePlaylistsTracksQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public EndpointReorderOrReplacePlaylistsTracksHeaders headers;
    public EndpointReorderOrReplacePlaylistsTracksRequest withHeaders(EndpointReorderOrReplacePlaylistsTracksHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public EndpointReorderOrReplacePlaylistsTracksRequestBody request;
    public EndpointReorderOrReplacePlaylistsTracksRequest withRequest(EndpointReorderOrReplacePlaylistsTracksRequestBody request) {
        this.request = request;
        return this;
    }
    public EndpointReorderOrReplacePlaylistsTracksSecurity security;
    public EndpointReorderOrReplacePlaylistsTracksRequest withSecurity(EndpointReorderOrReplacePlaylistsTracksSecurity security) {
        this.security = security;
        return this;
    }
}