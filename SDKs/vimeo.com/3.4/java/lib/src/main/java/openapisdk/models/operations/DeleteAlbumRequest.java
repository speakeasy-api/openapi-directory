package openapisdk.models.operations;



public class DeleteAlbumRequest {
    public DeleteAlbumPathParams pathParams;
    public DeleteAlbumRequest withPathParams(DeleteAlbumPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteAlbumSecurity security;
    public DeleteAlbumRequest withSecurity(DeleteAlbumSecurity security) {
        this.security = security;
        return this;
    }
}