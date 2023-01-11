package openapisdk.models.operations;



public class DeleteMediaRequest {
    public String serverURL;
    public DeleteMediaRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public DeleteMediaPathParams pathParams;
    public DeleteMediaRequest withPathParams(DeleteMediaPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteMediaSecurity security;
    public DeleteMediaRequest withSecurity(DeleteMediaSecurity security) {
        this.security = security;
        return this;
    }
}