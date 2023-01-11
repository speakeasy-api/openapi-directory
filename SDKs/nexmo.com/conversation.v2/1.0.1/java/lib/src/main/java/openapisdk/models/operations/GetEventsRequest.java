package openapisdk.models.operations;



public class GetEventsRequest {
    public GetEventsPathParams pathParams;
    public GetEventsRequest withPathParams(GetEventsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetEventsQueryParams queryParams;
    public GetEventsRequest withQueryParams(GetEventsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}