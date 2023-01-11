package openapisdk.models.operations;



public class CalendarCalendarsGetRequest {
    public CalendarCalendarsGetPathParams pathParams;
    public CalendarCalendarsGetRequest withPathParams(CalendarCalendarsGetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CalendarCalendarsGetQueryParams queryParams;
    public CalendarCalendarsGetRequest withQueryParams(CalendarCalendarsGetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public CalendarCalendarsGetSecurity security;
    public CalendarCalendarsGetRequest withSecurity(CalendarCalendarsGetSecurity security) {
        this.security = security;
        return this;
    }
}