package openapisdk.models.operations;



public class CalendarColorsGetRequest {
    public CalendarColorsGetQueryParams queryParams;
    public CalendarColorsGetRequest withQueryParams(CalendarColorsGetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public CalendarColorsGetSecurity security;
    public CalendarColorsGetRequest withSecurity(CalendarColorsGetSecurity security) {
        this.security = security;
        return this;
    }
}