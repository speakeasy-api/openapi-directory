package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateWirelessCommandRequest {
    public String serverURL;
    public CreateWirelessCommandRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreateWirelessCommandCreateWirelessCommandRequest request;
    public CreateWirelessCommandRequest withRequest(CreateWirelessCommandCreateWirelessCommandRequest request) {
        this.request = request;
        return this;
    }
    public CreateWirelessCommandSecurity security;
    public CreateWirelessCommandRequest withSecurity(CreateWirelessCommandSecurity security) {
        this.security = security;
        return this;
    }
}