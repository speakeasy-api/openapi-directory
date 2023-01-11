package openapisdk.models.operations;



public class DeleteFaxMediaRequest {
    public String serverURL;
    public DeleteFaxMediaRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public DeleteFaxMediaPathParams pathParams;
    public DeleteFaxMediaRequest withPathParams(DeleteFaxMediaPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteFaxMediaSecurity security;
    public DeleteFaxMediaRequest withSecurity(DeleteFaxMediaSecurity security) {
        this.security = security;
        return this;
    }
}