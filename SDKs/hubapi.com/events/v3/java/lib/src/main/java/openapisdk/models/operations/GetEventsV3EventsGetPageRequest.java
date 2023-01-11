package openapisdk.models.operations;



public class GetEventsV3EventsGetPageRequest {
    public GetEventsV3EventsGetPageQueryParams queryParams;
    public GetEventsV3EventsGetPageRequest withQueryParams(GetEventsV3EventsGetPageQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetEventsV3EventsGetPageSecurity security;
    public GetEventsV3EventsGetPageRequest withSecurity(GetEventsV3EventsGetPageSecurity security) {
        this.security = security;
        return this;
    }
}