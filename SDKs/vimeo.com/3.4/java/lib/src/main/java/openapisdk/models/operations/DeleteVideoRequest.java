package openapisdk.models.operations;



public class DeleteVideoRequest {
    public DeleteVideoPathParams pathParams;
    public DeleteVideoRequest withPathParams(DeleteVideoPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteVideoSecurity security;
    public DeleteVideoRequest withSecurity(DeleteVideoSecurity security) {
        this.security = security;
        return this;
    }
}