package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CalendarChannelsStopRequest {
    public CalendarChannelsStopQueryParams queryParams;
    public CalendarChannelsStopRequest withQueryParams(CalendarChannelsStopQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Channel request;
    public CalendarChannelsStopRequest withRequest(openapisdk.models.shared.Channel request) {
        this.request = request;
        return this;
    }
    public CalendarChannelsStopSecurity security;
    public CalendarChannelsStopRequest withSecurity(CalendarChannelsStopSecurity security) {
        this.security = security;
        return this;
    }
}