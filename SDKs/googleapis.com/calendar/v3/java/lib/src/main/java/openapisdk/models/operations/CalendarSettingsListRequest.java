package openapisdk.models.operations;



public class CalendarSettingsListRequest {
    public CalendarSettingsListQueryParams queryParams;
    public CalendarSettingsListRequest withQueryParams(CalendarSettingsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public CalendarSettingsListSecurity security;
    public CalendarSettingsListRequest withSecurity(CalendarSettingsListSecurity security) {
        this.security = security;
        return this;
    }
}