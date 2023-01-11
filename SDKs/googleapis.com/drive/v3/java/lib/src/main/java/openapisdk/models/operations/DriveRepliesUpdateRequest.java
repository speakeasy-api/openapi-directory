package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DriveRepliesUpdateRequest {
    public DriveRepliesUpdatePathParams pathParams;
    public DriveRepliesUpdateRequest withPathParams(DriveRepliesUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DriveRepliesUpdateQueryParams queryParams;
    public DriveRepliesUpdateRequest withQueryParams(DriveRepliesUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Reply request;
    public DriveRepliesUpdateRequest withRequest(openapisdk.models.shared.Reply request) {
        this.request = request;
        return this;
    }
    public DriveRepliesUpdateSecurity security;
    public DriveRepliesUpdateRequest withSecurity(DriveRepliesUpdateSecurity security) {
        this.security = security;
        return this;
    }
}