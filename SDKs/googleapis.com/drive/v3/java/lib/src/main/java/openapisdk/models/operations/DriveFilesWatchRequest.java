package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DriveFilesWatchRequest {
    public DriveFilesWatchPathParams pathParams;
    public DriveFilesWatchRequest withPathParams(DriveFilesWatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DriveFilesWatchQueryParams queryParams;
    public DriveFilesWatchRequest withQueryParams(DriveFilesWatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Channel request;
    public DriveFilesWatchRequest withRequest(openapisdk.models.shared.Channel request) {
        this.request = request;
        return this;
    }
    public DriveFilesWatchSecurity security;
    public DriveFilesWatchRequest withSecurity(DriveFilesWatchSecurity security) {
        this.security = security;
        return this;
    }
}