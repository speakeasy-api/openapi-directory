package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EditAlbumRequest {
    public EditAlbumPathParams pathParams;
    public EditAlbumRequest withPathParams(EditAlbumPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/vnd.vimeo.album+json")
    public EditAlbumRequestBody request;
    public EditAlbumRequest withRequest(EditAlbumRequestBody request) {
        this.request = request;
        return this;
    }
    public EditAlbumSecurity security;
    public EditAlbumRequest withSecurity(EditAlbumSecurity security) {
        this.security = security;
        return this;
    }
}