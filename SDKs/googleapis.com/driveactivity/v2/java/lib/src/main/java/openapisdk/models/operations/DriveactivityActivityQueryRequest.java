package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DriveactivityActivityQueryRequest {
    public DriveactivityActivityQueryQueryParams queryParams;
    public DriveactivityActivityQueryRequest withQueryParams(DriveactivityActivityQueryQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.QueryDriveActivityRequest request;
    public DriveactivityActivityQueryRequest withRequest(openapisdk.models.shared.QueryDriveActivityRequest request) {
        this.request = request;
        return this;
    }
    public DriveactivityActivityQuerySecurity security;
    public DriveactivityActivityQueryRequest withSecurity(DriveactivityActivityQuerySecurity security) {
        this.security = security;
        return this;
    }
}