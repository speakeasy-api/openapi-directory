package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DrivePropertiesPatchRequest {
    public DrivePropertiesPatchPathParams pathParams;
    public DrivePropertiesPatchRequest withPathParams(DrivePropertiesPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DrivePropertiesPatchQueryParams queryParams;
    public DrivePropertiesPatchRequest withQueryParams(DrivePropertiesPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Property request;
    public DrivePropertiesPatchRequest withRequest(openapisdk.models.shared.Property request) {
        this.request = request;
        return this;
    }
    public DrivePropertiesPatchSecurity security;
    public DrivePropertiesPatchRequest withSecurity(DrivePropertiesPatchSecurity security) {
        this.security = security;
        return this;
    }
}