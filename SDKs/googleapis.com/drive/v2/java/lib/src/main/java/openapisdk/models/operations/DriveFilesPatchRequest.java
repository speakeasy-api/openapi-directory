package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DriveFilesPatchRequest {
    public DriveFilesPatchPathParams pathParams;
    public DriveFilesPatchRequest withPathParams(DriveFilesPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DriveFilesPatchQueryParams queryParams;
    public DriveFilesPatchRequest withQueryParams(DriveFilesPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.FileInput request;
    public DriveFilesPatchRequest withRequest(openapisdk.models.shared.FileInput request) {
        this.request = request;
        return this;
    }
    public DriveFilesPatchSecurity security;
    public DriveFilesPatchRequest withSecurity(DriveFilesPatchSecurity security) {
        this.security = security;
        return this;
    }
}