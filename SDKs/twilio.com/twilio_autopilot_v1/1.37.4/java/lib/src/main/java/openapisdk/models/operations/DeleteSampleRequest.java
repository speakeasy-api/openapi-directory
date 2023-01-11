package openapisdk.models.operations;



public class DeleteSampleRequest {
    public String serverURL;
    public DeleteSampleRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public DeleteSamplePathParams pathParams;
    public DeleteSampleRequest withPathParams(DeleteSamplePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteSampleSecurity security;
    public DeleteSampleRequest withSecurity(DeleteSampleSecurity security) {
        this.security = security;
        return this;
    }
}