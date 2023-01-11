package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DriveChangesWatchRequest {
    public DriveChangesWatchQueryParams queryParams;
    public DriveChangesWatchRequest withQueryParams(DriveChangesWatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Channel request;
    public DriveChangesWatchRequest withRequest(openapisdk.models.shared.Channel request) {
        this.request = request;
        return this;
    }
    public DriveChangesWatchSecurity security;
    public DriveChangesWatchRequest withSecurity(DriveChangesWatchSecurity security) {
        this.security = security;
        return this;
    }
}