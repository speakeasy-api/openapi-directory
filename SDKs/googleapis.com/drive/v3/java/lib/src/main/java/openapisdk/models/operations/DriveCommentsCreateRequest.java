package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DriveCommentsCreateRequest {
    public DriveCommentsCreatePathParams pathParams;
    public DriveCommentsCreateRequest withPathParams(DriveCommentsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DriveCommentsCreateQueryParams queryParams;
    public DriveCommentsCreateRequest withQueryParams(DriveCommentsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Comment request;
    public DriveCommentsCreateRequest withRequest(openapisdk.models.shared.Comment request) {
        this.request = request;
        return this;
    }
    public DriveCommentsCreateSecurity security;
    public DriveCommentsCreateRequest withSecurity(DriveCommentsCreateSecurity security) {
        this.security = security;
        return this;
    }
}