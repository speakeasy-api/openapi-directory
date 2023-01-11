package openapisdk.models.operations;



public class DeleteNodeRequest {
    public DeleteNodePathParams pathParams;
    public DeleteNodeRequest withPathParams(DeleteNodePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteNodeQueryParams queryParams;
    public DeleteNodeRequest withQueryParams(DeleteNodeQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}