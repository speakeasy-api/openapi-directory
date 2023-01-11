package openapisdk.models.operations;



public class EventarcProjectsLocationsListRequest {
    public EventarcProjectsLocationsListPathParams pathParams;
    public EventarcProjectsLocationsListRequest withPathParams(EventarcProjectsLocationsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public EventarcProjectsLocationsListQueryParams queryParams;
    public EventarcProjectsLocationsListRequest withQueryParams(EventarcProjectsLocationsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public EventarcProjectsLocationsListSecurity security;
    public EventarcProjectsLocationsListRequest withSecurity(EventarcProjectsLocationsListSecurity security) {
        this.security = security;
        return this;
    }
}