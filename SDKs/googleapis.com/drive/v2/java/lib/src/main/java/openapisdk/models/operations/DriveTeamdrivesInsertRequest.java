package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DriveTeamdrivesInsertRequest {
    public DriveTeamdrivesInsertQueryParams queryParams;
    public DriveTeamdrivesInsertRequest withQueryParams(DriveTeamdrivesInsertQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.TeamDrive request;
    public DriveTeamdrivesInsertRequest withRequest(openapisdk.models.shared.TeamDrive request) {
        this.request = request;
        return this;
    }
    public DriveTeamdrivesInsertSecurity security;
    public DriveTeamdrivesInsertRequest withSecurity(DriveTeamdrivesInsertSecurity security) {
        this.security = security;
        return this;
    }
}