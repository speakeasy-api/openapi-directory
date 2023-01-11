package openapisdk.models.operations;



public class ListCallSummariesRequest {
    public String serverURL;
    public ListCallSummariesRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListCallSummariesQueryParams queryParams;
    public ListCallSummariesRequest withQueryParams(ListCallSummariesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListCallSummariesSecurity security;
    public ListCallSummariesRequest withSecurity(ListCallSummariesSecurity security) {
        this.security = security;
        return this;
    }
}