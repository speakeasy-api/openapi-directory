package openapisdk.models.operations;



public class DeleteGroupRequest {
    public DeleteGroupPathParams pathParams;
    public DeleteGroupRequest withPathParams(DeleteGroupPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteGroupSecurity security;
    public DeleteGroupRequest withSecurity(DeleteGroupSecurity security) {
        this.security = security;
        return this;
    }
}