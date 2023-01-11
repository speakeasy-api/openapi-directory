package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateSourceIpMappingRequest {
    public String serverURL;
    public UpdateSourceIpMappingRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public UpdateSourceIpMappingPathParams pathParams;
    public UpdateSourceIpMappingRequest withPathParams(UpdateSourceIpMappingPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public UpdateSourceIpMappingUpdateSourceIpMappingRequest request;
    public UpdateSourceIpMappingRequest withRequest(UpdateSourceIpMappingUpdateSourceIpMappingRequest request) {
        this.request = request;
        return this;
    }
    public UpdateSourceIpMappingSecurity security;
    public UpdateSourceIpMappingRequest withSecurity(UpdateSourceIpMappingSecurity security) {
        this.security = security;
        return this;
    }
}