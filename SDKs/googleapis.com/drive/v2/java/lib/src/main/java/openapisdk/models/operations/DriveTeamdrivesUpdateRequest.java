package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DriveTeamdrivesUpdateRequest {
    public DriveTeamdrivesUpdatePathParams pathParams;
    public DriveTeamdrivesUpdateRequest withPathParams(DriveTeamdrivesUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DriveTeamdrivesUpdateQueryParams queryParams;
    public DriveTeamdrivesUpdateRequest withQueryParams(DriveTeamdrivesUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.TeamDrive request;
    public DriveTeamdrivesUpdateRequest withRequest(openapisdk.models.shared.TeamDrive request) {
        this.request = request;
        return this;
    }
    public DriveTeamdrivesUpdateSecurity security;
    public DriveTeamdrivesUpdateRequest withSecurity(DriveTeamdrivesUpdateSecurity security) {
        this.security = security;
        return this;
    }
}