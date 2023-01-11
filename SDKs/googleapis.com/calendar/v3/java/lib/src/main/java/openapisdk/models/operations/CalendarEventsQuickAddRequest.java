package openapisdk.models.operations;



public class CalendarEventsQuickAddRequest {
    public CalendarEventsQuickAddPathParams pathParams;
    public CalendarEventsQuickAddRequest withPathParams(CalendarEventsQuickAddPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CalendarEventsQuickAddQueryParams queryParams;
    public CalendarEventsQuickAddRequest withQueryParams(CalendarEventsQuickAddQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public CalendarEventsQuickAddSecurity security;
    public CalendarEventsQuickAddRequest withSecurity(CalendarEventsQuickAddSecurity security) {
        this.security = security;
        return this;
    }
}