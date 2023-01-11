package openapisdk.models.operations;



public class DeleteOriginationUrlRequest {
    public String serverURL;
    public DeleteOriginationUrlRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public DeleteOriginationUrlPathParams pathParams;
    public DeleteOriginationUrlRequest withPathParams(DeleteOriginationUrlPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteOriginationUrlSecurity security;
    public DeleteOriginationUrlRequest withSecurity(DeleteOriginationUrlSecurity security) {
        this.security = security;
        return this;
    }
}