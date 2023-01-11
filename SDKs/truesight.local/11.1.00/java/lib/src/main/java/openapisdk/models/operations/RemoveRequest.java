package openapisdk.models.operations;



public class RemoveRequest {
    public RemovePathParams pathParams;
    public RemoveRequest withPathParams(RemovePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public RemoveQueryParams queryParams;
    public RemoveRequest withQueryParams(RemoveQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}