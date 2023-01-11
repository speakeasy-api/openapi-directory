package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DriveChildrenInsertRequest {
    public DriveChildrenInsertPathParams pathParams;
    public DriveChildrenInsertRequest withPathParams(DriveChildrenInsertPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DriveChildrenInsertQueryParams queryParams;
    public DriveChildrenInsertRequest withQueryParams(DriveChildrenInsertQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ChildReference request;
    public DriveChildrenInsertRequest withRequest(openapisdk.models.shared.ChildReference request) {
        this.request = request;
        return this;
    }
    public DriveChildrenInsertSecurity security;
    public DriveChildrenInsertRequest withSecurity(DriveChildrenInsertSecurity security) {
        this.security = security;
        return this;
    }
}