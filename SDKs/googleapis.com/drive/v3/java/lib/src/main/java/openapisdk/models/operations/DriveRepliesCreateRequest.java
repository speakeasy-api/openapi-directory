package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DriveRepliesCreateRequest {
    public DriveRepliesCreatePathParams pathParams;
    public DriveRepliesCreateRequest withPathParams(DriveRepliesCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DriveRepliesCreateQueryParams queryParams;
    public DriveRepliesCreateRequest withQueryParams(DriveRepliesCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Reply request;
    public DriveRepliesCreateRequest withRequest(openapisdk.models.shared.Reply request) {
        this.request = request;
        return this;
    }
    public DriveRepliesCreateSecurity security;
    public DriveRepliesCreateRequest withSecurity(DriveRepliesCreateSecurity security) {
        this.security = security;
        return this;
    }
}