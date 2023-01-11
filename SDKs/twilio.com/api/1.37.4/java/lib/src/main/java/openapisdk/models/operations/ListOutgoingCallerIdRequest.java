package openapisdk.models.operations;



public class ListOutgoingCallerIdRequest {
    public String serverURL;
    public ListOutgoingCallerIdRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListOutgoingCallerIdPathParams pathParams;
    public ListOutgoingCallerIdRequest withPathParams(ListOutgoingCallerIdPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListOutgoingCallerIdQueryParams queryParams;
    public ListOutgoingCallerIdRequest withQueryParams(ListOutgoingCallerIdQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListOutgoingCallerIdSecurity security;
    public ListOutgoingCallerIdRequest withSecurity(ListOutgoingCallerIdSecurity security) {
        this.security = security;
        return this;
    }
}