package openapisdk.models.operations;



public class CreateVodBackgroundRequest {
    public CreateVodBackgroundPathParams pathParams;
    public CreateVodBackgroundRequest withPathParams(CreateVodBackgroundPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CreateVodBackgroundSecurity security;
    public CreateVodBackgroundRequest withSecurity(CreateVodBackgroundSecurity security) {
        this.security = security;
        return this;
    }
}