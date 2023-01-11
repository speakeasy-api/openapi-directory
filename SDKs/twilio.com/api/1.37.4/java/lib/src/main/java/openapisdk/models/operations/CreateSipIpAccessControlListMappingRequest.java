package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateSipIpAccessControlListMappingRequest {
    public String serverURL;
    public CreateSipIpAccessControlListMappingRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public CreateSipIpAccessControlListMappingPathParams pathParams;
    public CreateSipIpAccessControlListMappingRequest withPathParams(CreateSipIpAccessControlListMappingPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreateSipIpAccessControlListMappingCreateSipIpAccessControlListMappingRequest request;
    public CreateSipIpAccessControlListMappingRequest withRequest(CreateSipIpAccessControlListMappingCreateSipIpAccessControlListMappingRequest request) {
        this.request = request;
        return this;
    }
    public CreateSipIpAccessControlListMappingSecurity security;
    public CreateSipIpAccessControlListMappingRequest withSecurity(CreateSipIpAccessControlListMappingSecurity security) {
        this.security = security;
        return this;
    }
}