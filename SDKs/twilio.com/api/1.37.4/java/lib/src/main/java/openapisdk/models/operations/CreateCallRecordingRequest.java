package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateCallRecordingRequest {
    public String serverURL;
    public CreateCallRecordingRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public CreateCallRecordingPathParams pathParams;
    public CreateCallRecordingRequest withPathParams(CreateCallRecordingPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreateCallRecordingCreateCallRecordingRequest request;
    public CreateCallRecordingRequest withRequest(CreateCallRecordingCreateCallRecordingRequest request) {
        this.request = request;
        return this;
    }
    public CreateCallRecordingSecurity security;
    public CreateCallRecordingRequest withSecurity(CreateCallRecordingSecurity security) {
        this.security = security;
        return this;
    }
}