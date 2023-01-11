package openapisdk.models.operations;



public class DeleteUnderstandSampleRequest {
    public String serverURL;
    public DeleteUnderstandSampleRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public DeleteUnderstandSamplePathParams pathParams;
    public DeleteUnderstandSampleRequest withPathParams(DeleteUnderstandSamplePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteUnderstandSampleSecurity security;
    public DeleteUnderstandSampleRequest withSecurity(DeleteUnderstandSampleSecurity security) {
        this.security = security;
        return this;
    }
}