package openapisdk.models.operations;



public class AddVodGenreRequest {
    public AddVodGenrePathParams pathParams;
    public AddVodGenreRequest withPathParams(AddVodGenrePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AddVodGenreSecurity security;
    public AddVodGenreRequest withSecurity(AddVodGenreSecurity security) {
        this.security = security;
        return this;
    }
}