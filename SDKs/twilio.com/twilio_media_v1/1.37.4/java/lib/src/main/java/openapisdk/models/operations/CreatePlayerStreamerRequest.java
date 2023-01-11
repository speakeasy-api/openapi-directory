package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreatePlayerStreamerRequest {
    public String serverURL;
    public CreatePlayerStreamerRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreatePlayerStreamerCreatePlayerStreamerRequest request;
    public CreatePlayerStreamerRequest withRequest(CreatePlayerStreamerCreatePlayerStreamerRequest request) {
        this.request = request;
        return this;
    }
    public CreatePlayerStreamerSecurity security;
    public CreatePlayerStreamerRequest withSecurity(CreatePlayerStreamerSecurity security) {
        this.security = security;
        return this;
    }
}