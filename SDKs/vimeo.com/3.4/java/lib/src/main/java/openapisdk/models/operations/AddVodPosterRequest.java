package openapisdk.models.operations;



public class AddVodPosterRequest {
    public AddVodPosterPathParams pathParams;
    public AddVodPosterRequest withPathParams(AddVodPosterPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AddVodPosterSecurity security;
    public AddVodPosterRequest withSecurity(AddVodPosterSecurity security) {
        this.security = security;
        return this;
    }
}