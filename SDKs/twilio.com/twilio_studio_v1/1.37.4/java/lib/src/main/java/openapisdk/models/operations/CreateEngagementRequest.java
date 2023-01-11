package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateEngagementRequest {
    public String serverURL;
    public CreateEngagementRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public CreateEngagementPathParams pathParams;
    public CreateEngagementRequest withPathParams(CreateEngagementPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreateEngagementCreateEngagementRequest request;
    public CreateEngagementRequest withRequest(CreateEngagementCreateEngagementRequest request) {
        this.request = request;
        return this;
    }
    public CreateEngagementSecurity security;
    public CreateEngagementRequest withSecurity(CreateEngagementSecurity security) {
        this.security = security;
        return this;
    }
}