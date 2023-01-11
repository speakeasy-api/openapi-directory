package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateRoomRequest {
    public String serverURL;
    public CreateRoomRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreateRoomCreateRoomRequest request;
    public CreateRoomRequest withRequest(CreateRoomCreateRoomRequest request) {
        this.request = request;
        return this;
    }
    public CreateRoomSecurity security;
    public CreateRoomRequest withSecurity(CreateRoomSecurity security) {
        this.security = security;
        return this;
    }
}