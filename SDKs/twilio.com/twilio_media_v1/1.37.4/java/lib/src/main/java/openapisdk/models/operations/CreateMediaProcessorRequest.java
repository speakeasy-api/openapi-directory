package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateMediaProcessorRequest {
    public String serverURL;
    public CreateMediaProcessorRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreateMediaProcessorCreateMediaProcessorRequest request;
    public CreateMediaProcessorRequest withRequest(CreateMediaProcessorCreateMediaProcessorRequest request) {
        this.request = request;
        return this;
    }
    public CreateMediaProcessorSecurity security;
    public CreateMediaProcessorRequest withSecurity(CreateMediaProcessorSecurity security) {
        this.security = security;
        return this;
    }
}