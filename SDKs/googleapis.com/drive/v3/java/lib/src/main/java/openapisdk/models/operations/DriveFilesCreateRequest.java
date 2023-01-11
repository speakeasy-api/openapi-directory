package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DriveFilesCreateRequest {
    public DriveFilesCreateQueryParams queryParams;
    public DriveFilesCreateRequest withQueryParams(DriveFilesCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/octet-stream")
    public byte[] request;
    public DriveFilesCreateRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
    public DriveFilesCreateSecurity security;
    public DriveFilesCreateRequest withSecurity(DriveFilesCreateSecurity security) {
        this.security = security;
        return this;
    }
}