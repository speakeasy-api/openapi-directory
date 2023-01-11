package openapisdk.models.operations;



public class DeleteVideoFromGroupRequest {
    public DeleteVideoFromGroupPathParams pathParams;
    public DeleteVideoFromGroupRequest withPathParams(DeleteVideoFromGroupPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteVideoFromGroupSecurity security;
    public DeleteVideoFromGroupRequest withSecurity(DeleteVideoFromGroupSecurity security) {
        this.security = security;
        return this;
    }
}