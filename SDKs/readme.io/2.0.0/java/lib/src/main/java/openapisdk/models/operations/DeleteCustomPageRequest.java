package openapisdk.models.operations;



public class DeleteCustomPageRequest {
    public DeleteCustomPagePathParams pathParams;
    public DeleteCustomPageRequest withPathParams(DeleteCustomPagePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteCustomPageSecurity security;
    public DeleteCustomPageRequest withSecurity(DeleteCustomPageSecurity security) {
        this.security = security;
        return this;
    }
}