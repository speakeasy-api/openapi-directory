package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DriveFilesUpdateRequest {
    public DriveFilesUpdatePathParams pathParams;
    public DriveFilesUpdateRequest withPathParams(DriveFilesUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DriveFilesUpdateQueryParams queryParams;
    public DriveFilesUpdateRequest withQueryParams(DriveFilesUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/octet-stream")
    public byte[] request;
    public DriveFilesUpdateRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
    public DriveFilesUpdateSecurity security;
    public DriveFilesUpdateRequest withSecurity(DriveFilesUpdateSecurity security) {
        this.security = security;
        return this;
    }
}