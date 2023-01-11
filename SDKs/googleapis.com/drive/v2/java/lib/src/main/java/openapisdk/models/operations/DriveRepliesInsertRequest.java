package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DriveRepliesInsertRequest {
    public DriveRepliesInsertPathParams pathParams;
    public DriveRepliesInsertRequest withPathParams(DriveRepliesInsertPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DriveRepliesInsertQueryParams queryParams;
    public DriveRepliesInsertRequest withQueryParams(DriveRepliesInsertQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CommentReply request;
    public DriveRepliesInsertRequest withRequest(openapisdk.models.shared.CommentReply request) {
        this.request = request;
        return this;
    }
    public DriveRepliesInsertSecurity security;
    public DriveRepliesInsertRequest withSecurity(DriveRepliesInsertSecurity security) {
        this.security = security;
        return this;
    }
}