package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateRecordingRequest {
    public String serverURL;
    public UpdateRecordingRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public UpdateRecordingPathParams pathParams;
    public UpdateRecordingRequest withPathParams(UpdateRecordingPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public UpdateRecordingUpdateRecordingRequest request;
    public UpdateRecordingRequest withRequest(UpdateRecordingUpdateRecordingRequest request) {
        this.request = request;
        return this;
    }
    public UpdateRecordingSecurity security;
    public UpdateRecordingRequest withSecurity(UpdateRecordingSecurity security) {
        this.security = security;
        return this;
    }
}