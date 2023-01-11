package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EndpointUploadCustomPlaylistCoverRequest {
    public EndpointUploadCustomPlaylistCoverPathParams pathParams;
    public EndpointUploadCustomPlaylistCoverRequest withPathParams(EndpointUploadCustomPlaylistCoverPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public EndpointUploadCustomPlaylistCoverHeaders headers;
    public EndpointUploadCustomPlaylistCoverRequest withHeaders(EndpointUploadCustomPlaylistCoverHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=image/jpeg")
    public String request;
    public EndpointUploadCustomPlaylistCoverRequest withRequest(String request) {
        this.request = request;
        return this;
    }
    public EndpointUploadCustomPlaylistCoverSecurity security;
    public EndpointUploadCustomPlaylistCoverRequest withSecurity(EndpointUploadCustomPlaylistCoverSecurity security) {
        this.security = security;
        return this;
    }
}