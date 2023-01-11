package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateTrunkRequest {
    public String serverURL;
    public CreateTrunkRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreateTrunkCreateTrunkRequest request;
    public CreateTrunkRequest withRequest(CreateTrunkCreateTrunkRequest request) {
        this.request = request;
        return this;
    }
    public CreateTrunkSecurity security;
    public CreateTrunkRequest withSecurity(CreateTrunkSecurity security) {
        this.security = security;
        return this;
    }
}