package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DriveParentsInsertRequest {
    public DriveParentsInsertPathParams pathParams;
    public DriveParentsInsertRequest withPathParams(DriveParentsInsertPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DriveParentsInsertQueryParams queryParams;
    public DriveParentsInsertRequest withQueryParams(DriveParentsInsertQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ParentReference request;
    public DriveParentsInsertRequest withRequest(openapisdk.models.shared.ParentReference request) {
        this.request = request;
        return this;
    }
    public DriveParentsInsertSecurity security;
    public DriveParentsInsertRequest withSecurity(DriveParentsInsertSecurity security) {
        this.security = security;
        return this;
    }
}