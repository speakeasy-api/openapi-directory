package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateConferenceRecordingRequest {
    public String serverURL;
    public UpdateConferenceRecordingRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public UpdateConferenceRecordingPathParams pathParams;
    public UpdateConferenceRecordingRequest withPathParams(UpdateConferenceRecordingPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public UpdateConferenceRecordingUpdateConferenceRecordingRequest request;
    public UpdateConferenceRecordingRequest withRequest(UpdateConferenceRecordingUpdateConferenceRecordingRequest request) {
        this.request = request;
        return this;
    }
    public UpdateConferenceRecordingSecurity security;
    public UpdateConferenceRecordingRequest withSecurity(UpdateConferenceRecordingSecurity security) {
        this.security = security;
        return this;
    }
}