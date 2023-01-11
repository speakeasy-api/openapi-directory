package openapisdk.models.operations;



public class FetchSummaryRequest {
    public String serverURL;
    public FetchSummaryRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchSummaryPathParams pathParams;
    public FetchSummaryRequest withPathParams(FetchSummaryPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchSummaryQueryParams queryParams;
    public FetchSummaryRequest withQueryParams(FetchSummaryQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public FetchSummarySecurity security;
    public FetchSummaryRequest withSecurity(FetchSummarySecurity security) {
        this.security = security;
        return this;
    }
}