package openapisdk.models.operations;



public class ListHistoricalGwsRequest {
    public ListHistoricalGwsQueryParams queryParams;
    public ListHistoricalGwsRequest withQueryParams(ListHistoricalGwsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListHistoricalGwsHeaders headers;
    public ListHistoricalGwsRequest withHeaders(ListHistoricalGwsHeaders headers) {
        this.headers = headers;
        return this;
    }
}