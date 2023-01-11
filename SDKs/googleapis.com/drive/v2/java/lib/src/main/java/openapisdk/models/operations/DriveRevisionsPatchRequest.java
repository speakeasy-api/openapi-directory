package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DriveRevisionsPatchRequest {
    public DriveRevisionsPatchPathParams pathParams;
    public DriveRevisionsPatchRequest withPathParams(DriveRevisionsPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DriveRevisionsPatchQueryParams queryParams;
    public DriveRevisionsPatchRequest withQueryParams(DriveRevisionsPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Revision request;
    public DriveRevisionsPatchRequest withRequest(openapisdk.models.shared.Revision request) {
        this.request = request;
        return this;
    }
    public DriveRevisionsPatchSecurity security;
    public DriveRevisionsPatchRequest withSecurity(DriveRevisionsPatchSecurity security) {
        this.security = security;
        return this;
    }
}