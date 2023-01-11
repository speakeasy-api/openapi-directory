package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DrivePropertiesInsertRequest {
    public DrivePropertiesInsertPathParams pathParams;
    public DrivePropertiesInsertRequest withPathParams(DrivePropertiesInsertPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DrivePropertiesInsertQueryParams queryParams;
    public DrivePropertiesInsertRequest withQueryParams(DrivePropertiesInsertQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Property request;
    public DrivePropertiesInsertRequest withRequest(openapisdk.models.shared.Property request) {
        this.request = request;
        return this;
    }
    public DrivePropertiesInsertSecurity security;
    public DrivePropertiesInsertRequest withSecurity(DrivePropertiesInsertSecurity security) {
        this.security = security;
        return this;
    }
}