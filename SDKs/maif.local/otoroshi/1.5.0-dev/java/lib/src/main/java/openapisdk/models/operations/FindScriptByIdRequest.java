package openapisdk.models.operations;



public class FindScriptByIdRequest {
    public FindScriptByIdPathParams pathParams;
    public FindScriptByIdRequest withPathParams(FindScriptByIdPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FindScriptByIdSecurity security;
    public FindScriptByIdRequest withSecurity(FindScriptByIdSecurity security) {
        this.security = security;
        return this;
    }
}