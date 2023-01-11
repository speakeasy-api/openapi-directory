package openapisdk.models.operations;



public class DeleteScriptTagRequest {
    public DeleteScriptTagPathParams pathParams;
    public DeleteScriptTagRequest withPathParams(DeleteScriptTagPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteScriptTagSecurity security;
    public DeleteScriptTagRequest withSecurity(DeleteScriptTagSecurity security) {
        this.security = security;
        return this;
    }
}