package openapisdk.models.operations;



public class DeleteVideoTagRequest {
    public DeleteVideoTagPathParams pathParams;
    public DeleteVideoTagRequest withPathParams(DeleteVideoTagPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteVideoTagSecurity security;
    public DeleteVideoTagRequest withSecurity(DeleteVideoTagSecurity security) {
        this.security = security;
        return this;
    }
}