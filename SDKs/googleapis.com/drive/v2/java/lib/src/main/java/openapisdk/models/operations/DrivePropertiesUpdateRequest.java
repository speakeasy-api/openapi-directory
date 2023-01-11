package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DrivePropertiesUpdateRequest {
    public DrivePropertiesUpdatePathParams pathParams;
    public DrivePropertiesUpdateRequest withPathParams(DrivePropertiesUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DrivePropertiesUpdateQueryParams queryParams;
    public DrivePropertiesUpdateRequest withQueryParams(DrivePropertiesUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Property request;
    public DrivePropertiesUpdateRequest withRequest(openapisdk.models.shared.Property request) {
        this.request = request;
        return this;
    }
    public DrivePropertiesUpdateSecurity security;
    public DrivePropertiesUpdateRequest withSecurity(DrivePropertiesUpdateSecurity security) {
        this.security = security;
        return this;
    }
}