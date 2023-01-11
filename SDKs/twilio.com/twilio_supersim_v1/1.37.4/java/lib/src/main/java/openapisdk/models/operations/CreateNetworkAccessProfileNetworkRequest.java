package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateNetworkAccessProfileNetworkRequest {
    public String serverURL;
    public CreateNetworkAccessProfileNetworkRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public CreateNetworkAccessProfileNetworkPathParams pathParams;
    public CreateNetworkAccessProfileNetworkRequest withPathParams(CreateNetworkAccessProfileNetworkPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreateNetworkAccessProfileNetworkCreateNetworkAccessProfileNetworkRequest request;
    public CreateNetworkAccessProfileNetworkRequest withRequest(CreateNetworkAccessProfileNetworkCreateNetworkAccessProfileNetworkRequest request) {
        this.request = request;
        return this;
    }
    public CreateNetworkAccessProfileNetworkSecurity security;
    public CreateNetworkAccessProfileNetworkRequest withSecurity(CreateNetworkAccessProfileNetworkSecurity security) {
        this.security = security;
        return this;
    }
}