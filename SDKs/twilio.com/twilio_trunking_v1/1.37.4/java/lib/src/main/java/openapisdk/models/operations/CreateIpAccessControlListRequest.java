package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateIpAccessControlListRequest {
    public String serverURL;
    public CreateIpAccessControlListRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public CreateIpAccessControlListPathParams pathParams;
    public CreateIpAccessControlListRequest withPathParams(CreateIpAccessControlListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreateIpAccessControlListCreateIpAccessControlListRequest request;
    public CreateIpAccessControlListRequest withRequest(CreateIpAccessControlListCreateIpAccessControlListRequest request) {
        this.request = request;
        return this;
    }
    public CreateIpAccessControlListSecurity security;
    public CreateIpAccessControlListRequest withSecurity(CreateIpAccessControlListSecurity security) {
        this.security = security;
        return this;
    }
}