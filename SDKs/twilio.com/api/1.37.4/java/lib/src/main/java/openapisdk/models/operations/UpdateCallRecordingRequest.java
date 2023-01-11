package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateCallRecordingRequest {
    public String serverURL;
    public UpdateCallRecordingRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public UpdateCallRecordingPathParams pathParams;
    public UpdateCallRecordingRequest withPathParams(UpdateCallRecordingPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public UpdateCallRecordingUpdateCallRecordingRequest request;
    public UpdateCallRecordingRequest withRequest(UpdateCallRecordingUpdateCallRecordingRequest request) {
        this.request = request;
        return this;
    }
    public UpdateCallRecordingSecurity security;
    public UpdateCallRecordingRequest withSecurity(UpdateCallRecordingSecurity security) {
        this.security = security;
        return this;
    }
}