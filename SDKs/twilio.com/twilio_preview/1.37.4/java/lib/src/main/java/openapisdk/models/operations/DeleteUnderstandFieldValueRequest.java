package openapisdk.models.operations;



public class DeleteUnderstandFieldValueRequest {
    public String serverURL;
    public DeleteUnderstandFieldValueRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public DeleteUnderstandFieldValuePathParams pathParams;
    public DeleteUnderstandFieldValueRequest withPathParams(DeleteUnderstandFieldValuePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteUnderstandFieldValueSecurity security;
    public DeleteUnderstandFieldValueRequest withSecurity(DeleteUnderstandFieldValueSecurity security) {
        this.security = security;
        return this;
    }
}