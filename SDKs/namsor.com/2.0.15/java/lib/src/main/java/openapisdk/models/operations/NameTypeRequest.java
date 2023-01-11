package openapisdk.models.operations;



public class NameTypeRequest {
    public NameTypePathParams pathParams;
    public NameTypeRequest withPathParams(NameTypePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public NameTypeSecurity security;
    public NameTypeRequest withSecurity(NameTypeSecurity security) {
        this.security = security;
        return this;
    }
}