package openapisdk.models.operations;



public class CalendarEventsDeleteRequest {
    public CalendarEventsDeletePathParams pathParams;
    public CalendarEventsDeleteRequest withPathParams(CalendarEventsDeletePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CalendarEventsDeleteQueryParams queryParams;
    public CalendarEventsDeleteRequest withQueryParams(CalendarEventsDeleteQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public CalendarEventsDeleteSecurity security;
    public CalendarEventsDeleteRequest withSecurity(CalendarEventsDeleteSecurity security) {
        this.security = security;
        return this;
    }
}