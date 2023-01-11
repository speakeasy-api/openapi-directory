package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DriveCommentsPatchRequest {
    public DriveCommentsPatchPathParams pathParams;
    public DriveCommentsPatchRequest withPathParams(DriveCommentsPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DriveCommentsPatchQueryParams queryParams;
    public DriveCommentsPatchRequest withQueryParams(DriveCommentsPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Comment request;
    public DriveCommentsPatchRequest withRequest(openapisdk.models.shared.Comment request) {
        this.request = request;
        return this;
    }
    public DriveCommentsPatchSecurity security;
    public DriveCommentsPatchRequest withSecurity(DriveCommentsPatchSecurity security) {
        this.security = security;
        return this;
    }
}