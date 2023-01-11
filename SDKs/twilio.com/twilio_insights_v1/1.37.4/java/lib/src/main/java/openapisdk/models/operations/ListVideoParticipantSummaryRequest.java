package openapisdk.models.operations;



public class ListVideoParticipantSummaryRequest {
    public String serverURL;
    public ListVideoParticipantSummaryRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListVideoParticipantSummaryPathParams pathParams;
    public ListVideoParticipantSummaryRequest withPathParams(ListVideoParticipantSummaryPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListVideoParticipantSummaryQueryParams queryParams;
    public ListVideoParticipantSummaryRequest withQueryParams(ListVideoParticipantSummaryQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListVideoParticipantSummarySecurity security;
    public ListVideoParticipantSummaryRequest withSecurity(ListVideoParticipantSummarySecurity security) {
        this.security = security;
        return this;
    }
}