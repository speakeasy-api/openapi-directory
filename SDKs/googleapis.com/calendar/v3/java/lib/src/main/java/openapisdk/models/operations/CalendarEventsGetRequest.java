package openapisdk.models.operations;



public class CalendarEventsGetRequest {
    public CalendarEventsGetPathParams pathParams;
    public CalendarEventsGetRequest withPathParams(CalendarEventsGetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CalendarEventsGetQueryParams queryParams;
    public CalendarEventsGetRequest withQueryParams(CalendarEventsGetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public CalendarEventsGetSecurity security;
    public CalendarEventsGetRequest withSecurity(CalendarEventsGetSecurity security) {
        this.security = security;
        return this;
    }
}