package openapisdk.models.operations;



public class FetchVideoParticipantSummaryRequest {
    public String serverURL;
    public FetchVideoParticipantSummaryRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchVideoParticipantSummaryPathParams pathParams;
    public FetchVideoParticipantSummaryRequest withPathParams(FetchVideoParticipantSummaryPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchVideoParticipantSummarySecurity security;
    public FetchVideoParticipantSummaryRequest withSecurity(FetchVideoParticipantSummarySecurity security) {
        this.security = security;
        return this;
    }
}