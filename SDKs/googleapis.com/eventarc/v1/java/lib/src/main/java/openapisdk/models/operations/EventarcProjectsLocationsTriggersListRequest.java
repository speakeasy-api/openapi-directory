package openapisdk.models.operations;



public class EventarcProjectsLocationsTriggersListRequest {
    public EventarcProjectsLocationsTriggersListPathParams pathParams;
    public EventarcProjectsLocationsTriggersListRequest withPathParams(EventarcProjectsLocationsTriggersListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public EventarcProjectsLocationsTriggersListQueryParams queryParams;
    public EventarcProjectsLocationsTriggersListRequest withQueryParams(EventarcProjectsLocationsTriggersListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public EventarcProjectsLocationsTriggersListSecurity security;
    public EventarcProjectsLocationsTriggersListRequest withSecurity(EventarcProjectsLocationsTriggersListSecurity security) {
        this.security = security;
        return this;
    }
}