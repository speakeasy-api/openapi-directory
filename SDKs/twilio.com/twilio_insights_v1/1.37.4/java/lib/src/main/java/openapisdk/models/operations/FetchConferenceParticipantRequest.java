package openapisdk.models.operations;



public class FetchConferenceParticipantRequest {
    public String serverURL;
    public FetchConferenceParticipantRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchConferenceParticipantPathParams pathParams;
    public FetchConferenceParticipantRequest withPathParams(FetchConferenceParticipantPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchConferenceParticipantQueryParams queryParams;
    public FetchConferenceParticipantRequest withQueryParams(FetchConferenceParticipantQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public FetchConferenceParticipantSecurity security;
    public FetchConferenceParticipantRequest withSecurity(FetchConferenceParticipantSecurity security) {
        this.security = security;
        return this;
    }
}