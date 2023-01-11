package openapisdk.models.operations;



public class CalendarCalendarListGetRequest {
    public CalendarCalendarListGetPathParams pathParams;
    public CalendarCalendarListGetRequest withPathParams(CalendarCalendarListGetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CalendarCalendarListGetQueryParams queryParams;
    public CalendarCalendarListGetRequest withQueryParams(CalendarCalendarListGetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public CalendarCalendarListGetSecurity security;
    public CalendarCalendarListGetRequest withSecurity(CalendarCalendarListGetSecurity security) {
        this.security = security;
        return this;
    }
}