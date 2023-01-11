package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisplayvideoUsersCreateRequest {
    public DisplayvideoUsersCreateQueryParams queryParams;
    public DisplayvideoUsersCreateRequest withQueryParams(DisplayvideoUsersCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UserInput request;
    public DisplayvideoUsersCreateRequest withRequest(openapisdk.models.shared.UserInput request) {
        this.request = request;
        return this;
    }
    public DisplayvideoUsersCreateSecurity security;
    public DisplayvideoUsersCreateRequest withSecurity(DisplayvideoUsersCreateSecurity security) {
        this.security = security;
        return this;
    }
}