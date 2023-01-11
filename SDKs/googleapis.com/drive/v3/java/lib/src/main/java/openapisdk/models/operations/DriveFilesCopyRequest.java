package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DriveFilesCopyRequest {
    public DriveFilesCopyPathParams pathParams;
    public DriveFilesCopyRequest withPathParams(DriveFilesCopyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DriveFilesCopyQueryParams queryParams;
    public DriveFilesCopyRequest withQueryParams(DriveFilesCopyQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.FileInput request;
    public DriveFilesCopyRequest withRequest(openapisdk.models.shared.FileInput request) {
        this.request = request;
        return this;
    }
    public DriveFilesCopySecurity security;
    public DriveFilesCopyRequest withSecurity(DriveFilesCopySecurity security) {
        this.security = security;
        return this;
    }
}