package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DriveDrivesUpdateRequest {
    public DriveDrivesUpdatePathParams pathParams;
    public DriveDrivesUpdateRequest withPathParams(DriveDrivesUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DriveDrivesUpdateQueryParams queryParams;
    public DriveDrivesUpdateRequest withQueryParams(DriveDrivesUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Drive request;
    public DriveDrivesUpdateRequest withRequest(openapisdk.models.shared.Drive request) {
        this.request = request;
        return this;
    }
    public DriveDrivesUpdateSecurity security;
    public DriveDrivesUpdateRequest withSecurity(DriveDrivesUpdateSecurity security) {
        this.security = security;
        return this;
    }
}