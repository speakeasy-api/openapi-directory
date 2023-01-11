package openapisdk.models.operations;



public class ListSourceTasksRequest {
    public ListSourceTasksPathParams pathParams;
    public ListSourceTasksRequest withPathParams(ListSourceTasksPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListSourceTasksQueryParams queryParams;
    public ListSourceTasksRequest withQueryParams(ListSourceTasksQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}