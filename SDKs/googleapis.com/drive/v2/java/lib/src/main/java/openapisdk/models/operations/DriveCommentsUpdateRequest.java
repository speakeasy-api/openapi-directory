package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DriveCommentsUpdateRequest {
    public DriveCommentsUpdatePathParams pathParams;
    public DriveCommentsUpdateRequest withPathParams(DriveCommentsUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DriveCommentsUpdateQueryParams queryParams;
    public DriveCommentsUpdateRequest withQueryParams(DriveCommentsUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Comment request;
    public DriveCommentsUpdateRequest withRequest(openapisdk.models.shared.Comment request) {
        this.request = request;
        return this;
    }
    public DriveCommentsUpdateSecurity security;
    public DriveCommentsUpdateRequest withSecurity(DriveCommentsUpdateSecurity security) {
        this.security = security;
        return this;
    }
}