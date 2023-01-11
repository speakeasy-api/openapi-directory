package openapisdk.models.operations;



public class DeleteRequest {
    public DeletePathParams pathParams;
    public DeleteRequest withPathParams(DeletePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteQueryParams queryParams;
    public DeleteRequest withQueryParams(DeleteQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}