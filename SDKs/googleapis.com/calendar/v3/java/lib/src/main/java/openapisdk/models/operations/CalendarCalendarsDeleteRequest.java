package openapisdk.models.operations;



public class CalendarCalendarsDeleteRequest {
    public CalendarCalendarsDeletePathParams pathParams;
    public CalendarCalendarsDeleteRequest withPathParams(CalendarCalendarsDeletePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CalendarCalendarsDeleteQueryParams queryParams;
    public CalendarCalendarsDeleteRequest withQueryParams(CalendarCalendarsDeleteQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public CalendarCalendarsDeleteSecurity security;
    public CalendarCalendarsDeleteRequest withSecurity(CalendarCalendarsDeleteSecurity security) {
        this.security = security;
        return this;
    }
}