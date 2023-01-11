package openapisdk.models.operations;



public class DeleteInlineScriptTagRequest {
    public DeleteInlineScriptTagPathParams pathParams;
    public DeleteInlineScriptTagRequest withPathParams(DeleteInlineScriptTagPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteInlineScriptTagSecurity security;
    public DeleteInlineScriptTagRequest withSecurity(DeleteInlineScriptTagSecurity security) {
        this.security = security;
        return this;
    }
}