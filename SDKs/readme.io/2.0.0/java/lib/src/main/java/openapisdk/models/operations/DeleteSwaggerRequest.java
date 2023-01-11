package openapisdk.models.operations;



public class DeleteSwaggerRequest {
    public DeleteSwaggerPathParams pathParams;
    public DeleteSwaggerRequest withPathParams(DeleteSwaggerPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteSwaggerSecurity security;
    public DeleteSwaggerRequest withSecurity(DeleteSwaggerSecurity security) {
        this.security = security;
        return this;
    }
}