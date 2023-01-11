package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DriveCommentsInsertRequest {
    public DriveCommentsInsertPathParams pathParams;
    public DriveCommentsInsertRequest withPathParams(DriveCommentsInsertPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DriveCommentsInsertQueryParams queryParams;
    public DriveCommentsInsertRequest withQueryParams(DriveCommentsInsertQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Comment request;
    public DriveCommentsInsertRequest withRequest(openapisdk.models.shared.Comment request) {
        this.request = request;
        return this;
    }
    public DriveCommentsInsertSecurity security;
    public DriveCommentsInsertRequest withSecurity(DriveCommentsInsertSecurity security) {
        this.security = security;
        return this;
    }
}