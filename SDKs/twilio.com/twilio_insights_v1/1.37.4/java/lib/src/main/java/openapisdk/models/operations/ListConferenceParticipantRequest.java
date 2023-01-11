package openapisdk.models.operations;



public class ListConferenceParticipantRequest {
    public String serverURL;
    public ListConferenceParticipantRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListConferenceParticipantPathParams pathParams;
    public ListConferenceParticipantRequest withPathParams(ListConferenceParticipantPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListConferenceParticipantQueryParams queryParams;
    public ListConferenceParticipantRequest withQueryParams(ListConferenceParticipantQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListConferenceParticipantSecurity security;
    public ListConferenceParticipantRequest withSecurity(ListConferenceParticipantSecurity security) {
        this.security = security;
        return this;
    }
}