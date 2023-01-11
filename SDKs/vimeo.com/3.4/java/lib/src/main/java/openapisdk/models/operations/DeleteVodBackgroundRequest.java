package openapisdk.models.operations;



public class DeleteVodBackgroundRequest {
    public DeleteVodBackgroundPathParams pathParams;
    public DeleteVodBackgroundRequest withPathParams(DeleteVodBackgroundPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteVodBackgroundSecurity security;
    public DeleteVodBackgroundRequest withSecurity(DeleteVodBackgroundSecurity security) {
        this.security = security;
        return this;
    }
}