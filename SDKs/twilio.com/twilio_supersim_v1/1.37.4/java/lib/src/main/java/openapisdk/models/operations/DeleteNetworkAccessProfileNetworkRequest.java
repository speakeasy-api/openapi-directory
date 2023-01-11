package openapisdk.models.operations;



public class DeleteNetworkAccessProfileNetworkRequest {
    public String serverURL;
    public DeleteNetworkAccessProfileNetworkRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public DeleteNetworkAccessProfileNetworkPathParams pathParams;
    public DeleteNetworkAccessProfileNetworkRequest withPathParams(DeleteNetworkAccessProfileNetworkPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteNetworkAccessProfileNetworkSecurity security;
    public DeleteNetworkAccessProfileNetworkRequest withSecurity(DeleteNetworkAccessProfileNetworkSecurity security) {
        this.security = security;
        return this;
    }
}