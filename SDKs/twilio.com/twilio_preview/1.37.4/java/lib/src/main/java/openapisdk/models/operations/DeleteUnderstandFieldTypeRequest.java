package openapisdk.models.operations;



public class DeleteUnderstandFieldTypeRequest {
    public String serverURL;
    public DeleteUnderstandFieldTypeRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public DeleteUnderstandFieldTypePathParams pathParams;
    public DeleteUnderstandFieldTypeRequest withPathParams(DeleteUnderstandFieldTypePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteUnderstandFieldTypeSecurity security;
    public DeleteUnderstandFieldTypeRequest withSecurity(DeleteUnderstandFieldTypeSecurity security) {
        this.security = security;
        return this;
    }
}