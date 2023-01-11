package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AdminChannelsStopRequest {
    public AdminChannelsStopQueryParams queryParams;
    public AdminChannelsStopRequest withQueryParams(AdminChannelsStopQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Channel request;
    public AdminChannelsStopRequest withRequest(openapisdk.models.shared.Channel request) {
        this.request = request;
        return this;
    }
    public AdminChannelsStopSecurity security;
    public AdminChannelsStopRequest withSecurity(AdminChannelsStopSecurity security) {
        this.security = security;
        return this;
    }
}