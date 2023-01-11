package openapisdk.models.operations;



public class ListConferenceRecordingRequest {
    public String serverURL;
    public ListConferenceRecordingRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListConferenceRecordingPathParams pathParams;
    public ListConferenceRecordingRequest withPathParams(ListConferenceRecordingPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListConferenceRecordingQueryParams queryParams;
    public ListConferenceRecordingRequest withQueryParams(ListConferenceRecordingQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListConferenceRecordingSecurity security;
    public ListConferenceRecordingRequest withSecurity(ListConferenceRecordingSecurity security) {
        this.security = security;
        return this;
    }
}