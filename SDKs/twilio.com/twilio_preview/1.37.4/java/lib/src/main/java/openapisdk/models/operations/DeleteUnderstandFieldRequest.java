package openapisdk.models.operations;



public class DeleteUnderstandFieldRequest {
    public String serverURL;
    public DeleteUnderstandFieldRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public DeleteUnderstandFieldPathParams pathParams;
    public DeleteUnderstandFieldRequest withPathParams(DeleteUnderstandFieldPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteUnderstandFieldSecurity security;
    public DeleteUnderstandFieldRequest withSecurity(DeleteUnderstandFieldSecurity security) {
        this.security = security;
        return this;
    }
}