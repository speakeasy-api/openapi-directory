package openapisdk.models.operations;



public class ListExportCustomJobRequest {
    public String serverURL;
    public ListExportCustomJobRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListExportCustomJobPathParams pathParams;
    public ListExportCustomJobRequest withPathParams(ListExportCustomJobPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListExportCustomJobQueryParams queryParams;
    public ListExportCustomJobRequest withQueryParams(ListExportCustomJobQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListExportCustomJobSecurity security;
    public ListExportCustomJobRequest withSecurity(ListExportCustomJobSecurity security) {
        this.security = security;
        return this;
    }
}