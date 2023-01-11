package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateByocTrunkRequest {
    public String serverURL;
    public CreateByocTrunkRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreateByocTrunkCreateByocTrunkRequest request;
    public CreateByocTrunkRequest withRequest(CreateByocTrunkCreateByocTrunkRequest request) {
        this.request = request;
        return this;
    }
    public CreateByocTrunkSecurity security;
    public CreateByocTrunkRequest withSecurity(CreateByocTrunkSecurity security) {
        this.security = security;
        return this;
    }
}