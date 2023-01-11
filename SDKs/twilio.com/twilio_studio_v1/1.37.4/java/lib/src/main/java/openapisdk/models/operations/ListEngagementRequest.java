package openapisdk.models.operations;



public class ListEngagementRequest {
    public String serverURL;
    public ListEngagementRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListEngagementPathParams pathParams;
    public ListEngagementRequest withPathParams(ListEngagementPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListEngagementQueryParams queryParams;
    public ListEngagementRequest withQueryParams(ListEngagementQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListEngagementSecurity security;
    public ListEngagementRequest withSecurity(ListEngagementSecurity security) {
        this.security = security;
        return this;
    }
}