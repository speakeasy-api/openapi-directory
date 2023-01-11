package openapisdk.models.operations;



public class CalendarSettingsGetRequest {
    public CalendarSettingsGetPathParams pathParams;
    public CalendarSettingsGetRequest withPathParams(CalendarSettingsGetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CalendarSettingsGetQueryParams queryParams;
    public CalendarSettingsGetRequest withQueryParams(CalendarSettingsGetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public CalendarSettingsGetSecurity security;
    public CalendarSettingsGetRequest withSecurity(CalendarSettingsGetSecurity security) {
        this.security = security;
        return this;
    }
}