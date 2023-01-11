package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DriveChannelsStopRequest {
    public DriveChannelsStopQueryParams queryParams;
    public DriveChannelsStopRequest withQueryParams(DriveChannelsStopQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Channel request;
    public DriveChannelsStopRequest withRequest(openapisdk.models.shared.Channel request) {
        this.request = request;
        return this;
    }
    public DriveChannelsStopSecurity security;
    public DriveChannelsStopRequest withSecurity(DriveChannelsStopSecurity security) {
        this.security = security;
        return this;
    }
}