package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateRoomRequest {
    public String serverURL;
    public UpdateRoomRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public UpdateRoomPathParams pathParams;
    public UpdateRoomRequest withPathParams(UpdateRoomPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public UpdateRoomUpdateRoomRequest request;
    public UpdateRoomRequest withRequest(UpdateRoomUpdateRoomRequest request) {
        this.request = request;
        return this;
    }
    public UpdateRoomSecurity security;
    public UpdateRoomRequest withSecurity(UpdateRoomSecurity security) {
        this.security = security;
        return this;
    }
}