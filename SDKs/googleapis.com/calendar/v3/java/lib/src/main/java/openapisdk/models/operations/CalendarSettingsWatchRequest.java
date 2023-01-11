package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CalendarSettingsWatchRequest {
    public CalendarSettingsWatchQueryParams queryParams;
    public CalendarSettingsWatchRequest withQueryParams(CalendarSettingsWatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Channel request;
    public CalendarSettingsWatchRequest withRequest(openapisdk.models.shared.Channel request) {
        this.request = request;
        return this;
    }
    public CalendarSettingsWatchSecurity security;
    public CalendarSettingsWatchRequest withSecurity(CalendarSettingsWatchSecurity security) {
        this.security = security;
        return this;
    }
}