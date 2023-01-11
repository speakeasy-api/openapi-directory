package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DriveRepliesPatchRequest {
    public DriveRepliesPatchPathParams pathParams;
    public DriveRepliesPatchRequest withPathParams(DriveRepliesPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DriveRepliesPatchQueryParams queryParams;
    public DriveRepliesPatchRequest withQueryParams(DriveRepliesPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CommentReply request;
    public DriveRepliesPatchRequest withRequest(openapisdk.models.shared.CommentReply request) {
        this.request = request;
        return this;
    }
    public DriveRepliesPatchSecurity security;
    public DriveRepliesPatchRequest withSecurity(DriveRepliesPatchSecurity security) {
        this.security = security;
        return this;
    }
}