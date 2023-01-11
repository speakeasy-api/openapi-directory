package openapisdk.models.operations;



public class DeleteServiceRequest {
    public String serverURL;
    public DeleteServiceRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public DeleteServicePathParams pathParams;
    public DeleteServiceRequest withPathParams(DeleteServicePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteServiceSecurity security;
    public DeleteServiceRequest withSecurity(DeleteServiceSecurity security) {
        this.security = security;
        return this;
    }
}