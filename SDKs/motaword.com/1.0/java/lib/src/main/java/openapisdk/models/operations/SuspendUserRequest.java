package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SuspendUserRequest {
    public SuspendUserPathParams pathParams;
    public SuspendUserRequest withPathParams(SuspendUserPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public SuspendUserRequestBody request;
    public SuspendUserRequest withRequest(SuspendUserRequestBody request) {
        this.request = request;
        return this;
    }
    public SuspendUserSecurity security;
    public SuspendUserRequest withSecurity(SuspendUserSecurity security) {
        this.security = security;
        return this;
    }
}