package openapisdk.models.operations;



public class DeleteFaxRequest {
    public String serverURL;
    public DeleteFaxRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public DeleteFaxPathParams pathParams;
    public DeleteFaxRequest withPathParams(DeleteFaxPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteFaxSecurity security;
    public DeleteFaxRequest withSecurity(DeleteFaxSecurity security) {
        this.security = security;
        return this;
    }
}