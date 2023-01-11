package openapisdk.models.operations;



public class DeleteVideoCollectionRequest {
    public DeleteVideoCollectionPathParams pathParams;
    public DeleteVideoCollectionRequest withPathParams(DeleteVideoCollectionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteVideoCollectionSecurity security;
    public DeleteVideoCollectionRequest withSecurity(DeleteVideoCollectionSecurity security) {
        this.security = security;
        return this;
    }
}