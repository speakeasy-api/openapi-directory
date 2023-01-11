package openapisdk.models.operations;



public class DeleteScriptRequest {
    public DeleteScriptPathParams pathParams;
    public DeleteScriptRequest withPathParams(DeleteScriptPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteScriptSecurity security;
    public DeleteScriptRequest withSecurity(DeleteScriptSecurity security) {
        this.security = security;
        return this;
    }
}