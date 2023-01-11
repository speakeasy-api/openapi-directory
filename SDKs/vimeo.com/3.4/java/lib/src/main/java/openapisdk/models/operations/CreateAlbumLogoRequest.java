package openapisdk.models.operations;



public class CreateAlbumLogoRequest {
    public CreateAlbumLogoPathParams pathParams;
    public CreateAlbumLogoRequest withPathParams(CreateAlbumLogoPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CreateAlbumLogoSecurity security;
    public CreateAlbumLogoRequest withSecurity(CreateAlbumLogoSecurity security) {
        this.security = security;
        return this;
    }
}