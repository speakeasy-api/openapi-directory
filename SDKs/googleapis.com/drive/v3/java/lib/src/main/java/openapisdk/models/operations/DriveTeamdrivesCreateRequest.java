package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DriveTeamdrivesCreateRequest {
    public DriveTeamdrivesCreateQueryParams queryParams;
    public DriveTeamdrivesCreateRequest withQueryParams(DriveTeamdrivesCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.TeamDrive request;
    public DriveTeamdrivesCreateRequest withRequest(openapisdk.models.shared.TeamDrive request) {
        this.request = request;
        return this;
    }
    public DriveTeamdrivesCreateSecurity security;
    public DriveTeamdrivesCreateRequest withSecurity(DriveTeamdrivesCreateSecurity security) {
        this.security = security;
        return this;
    }
}