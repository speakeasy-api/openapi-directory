package openapisdk.models.operations;



public class DeleteVodGenreRequest {
    public DeleteVodGenrePathParams pathParams;
    public DeleteVodGenreRequest withPathParams(DeleteVodGenrePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteVodGenreSecurity security;
    public DeleteVodGenreRequest withSecurity(DeleteVodGenreSecurity security) {
        this.security = security;
        return this;
    }
}