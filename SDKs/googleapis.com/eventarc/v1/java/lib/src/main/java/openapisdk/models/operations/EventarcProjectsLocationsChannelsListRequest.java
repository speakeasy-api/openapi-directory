package openapisdk.models.operations;



public class EventarcProjectsLocationsChannelsListRequest {
    public EventarcProjectsLocationsChannelsListPathParams pathParams;
    public EventarcProjectsLocationsChannelsListRequest withPathParams(EventarcProjectsLocationsChannelsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public EventarcProjectsLocationsChannelsListQueryParams queryParams;
    public EventarcProjectsLocationsChannelsListRequest withQueryParams(EventarcProjectsLocationsChannelsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public EventarcProjectsLocationsChannelsListSecurity security;
    public EventarcProjectsLocationsChannelsListRequest withSecurity(EventarcProjectsLocationsChannelsListSecurity security) {
        this.security = security;
        return this;
    }
}