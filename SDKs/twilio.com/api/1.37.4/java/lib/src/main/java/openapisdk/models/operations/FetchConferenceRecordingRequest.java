package openapisdk.models.operations;



public class FetchConferenceRecordingRequest {
    public String serverURL;
    public FetchConferenceRecordingRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchConferenceRecordingPathParams pathParams;
    public FetchConferenceRecordingRequest withPathParams(FetchConferenceRecordingPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchConferenceRecordingSecurity security;
    public FetchConferenceRecordingRequest withSecurity(FetchConferenceRecordingSecurity security) {
        this.security = security;
        return this;
    }
}