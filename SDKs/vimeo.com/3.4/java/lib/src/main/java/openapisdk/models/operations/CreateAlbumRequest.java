package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateAlbumRequest {
    public CreateAlbumPathParams pathParams;
    public CreateAlbumRequest withPathParams(CreateAlbumPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/vnd.vimeo.album+json")
    public CreateAlbumRequestBody request;
    public CreateAlbumRequest withRequest(CreateAlbumRequestBody request) {
        this.request = request;
        return this;
    }
    public CreateAlbumSecurity security;
    public CreateAlbumRequest withSecurity(CreateAlbumSecurity security) {
        this.security = security;
        return this;
    }
}