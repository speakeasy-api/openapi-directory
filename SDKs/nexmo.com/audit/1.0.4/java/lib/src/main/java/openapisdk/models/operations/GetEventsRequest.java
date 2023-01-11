package openapisdk.models.operations;



public class GetEventsRequest {
    public GetEventsQueryParams queryParams;
    public GetEventsRequest withQueryParams(GetEventsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetEventsSecurity security;
    public GetEventsRequest withSecurity(GetEventsSecurity security) {
        this.security = security;
        return this;
    }
}