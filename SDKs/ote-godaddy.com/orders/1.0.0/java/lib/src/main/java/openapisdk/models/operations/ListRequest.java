package openapisdk.models.operations;



public class ListRequest {
    public ListQueryParams queryParams;
    public ListRequest withQueryParams(ListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListHeaders headers;
    public ListRequest withHeaders(ListHeaders headers) {
        this.headers = headers;
        return this;
    }
}