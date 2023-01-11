package openapisdk.models.operations;



public class ListParticipantRequest {
    public String serverURL;
    public ListParticipantRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListParticipantPathParams pathParams;
    public ListParticipantRequest withPathParams(ListParticipantPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListParticipantQueryParams queryParams;
    public ListParticipantRequest withQueryParams(ListParticipantQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListParticipantSecurity security;
    public ListParticipantRequest withSecurity(ListParticipantSecurity security) {
        this.security = security;
        return this;
    }
}