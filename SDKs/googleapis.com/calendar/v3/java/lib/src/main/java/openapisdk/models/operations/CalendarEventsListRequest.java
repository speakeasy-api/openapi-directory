package openapisdk.models.operations;



public class CalendarEventsListRequest {
    public CalendarEventsListPathParams pathParams;
    public CalendarEventsListRequest withPathParams(CalendarEventsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CalendarEventsListQueryParams queryParams;
    public CalendarEventsListRequest withQueryParams(CalendarEventsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public CalendarEventsListSecurity security;
    public CalendarEventsListRequest withSecurity(CalendarEventsListSecurity security) {
        this.security = security;
        return this;
    }
}