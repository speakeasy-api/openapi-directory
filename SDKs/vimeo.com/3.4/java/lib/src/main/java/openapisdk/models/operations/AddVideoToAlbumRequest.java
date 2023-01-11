package openapisdk.models.operations;



public class AddVideoToAlbumRequest {
    public AddVideoToAlbumPathParams pathParams;
    public AddVideoToAlbumRequest withPathParams(AddVideoToAlbumPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AddVideoToAlbumSecurity security;
    public AddVideoToAlbumRequest withSecurity(AddVideoToAlbumSecurity security) {
        this.security = security;
        return this;
    }
}