package openapisdk.models.operations;



public class ListWorkerRequest {
    public String serverURL;
    public ListWorkerRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListWorkerPathParams pathParams;
    public ListWorkerRequest withPathParams(ListWorkerPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListWorkerQueryParams queryParams;
    public ListWorkerRequest withQueryParams(ListWorkerQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListWorkerSecurity security;
    public ListWorkerRequest withSecurity(ListWorkerSecurity security) {
        this.security = security;
        return this;
    }
}