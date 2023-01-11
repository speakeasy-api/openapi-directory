package openapisdk.models.operations;



public class DeleteImageCollectionRequest {
    public DeleteImageCollectionPathParams pathParams;
    public DeleteImageCollectionRequest withPathParams(DeleteImageCollectionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteImageCollectionSecurity security;
    public DeleteImageCollectionRequest withSecurity(DeleteImageCollectionSecurity security) {
        this.security = security;
        return this;
    }
}