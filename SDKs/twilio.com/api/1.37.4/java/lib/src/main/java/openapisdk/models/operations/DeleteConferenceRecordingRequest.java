package openapisdk.models.operations;



public class DeleteConferenceRecordingRequest {
    public String serverURL;
    public DeleteConferenceRecordingRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public DeleteConferenceRecordingPathParams pathParams;
    public DeleteConferenceRecordingRequest withPathParams(DeleteConferenceRecordingPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteConferenceRecordingSecurity security;
    public DeleteConferenceRecordingRequest withSecurity(DeleteConferenceRecordingSecurity security) {
        this.security = security;
        return this;
    }
}