package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateSourceIpMappingRequest {
    public String serverURL;
    public CreateSourceIpMappingRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreateSourceIpMappingCreateSourceIpMappingRequest request;
    public CreateSourceIpMappingRequest withRequest(CreateSourceIpMappingCreateSourceIpMappingRequest request) {
        this.request = request;
        return this;
    }
    public CreateSourceIpMappingSecurity security;
    public CreateSourceIpMappingRequest withSecurity(CreateSourceIpMappingSecurity security) {
        this.security = security;
        return this;
    }
}