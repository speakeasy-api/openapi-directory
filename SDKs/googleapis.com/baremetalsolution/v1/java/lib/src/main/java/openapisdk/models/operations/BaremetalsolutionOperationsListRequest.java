package openapisdk.models.operations;



public class BaremetalsolutionOperationsListRequest {
    public BaremetalsolutionOperationsListPathParams pathParams;
    public BaremetalsolutionOperationsListRequest withPathParams(BaremetalsolutionOperationsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public BaremetalsolutionOperationsListQueryParams queryParams;
    public BaremetalsolutionOperationsListRequest withQueryParams(BaremetalsolutionOperationsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public BaremetalsolutionOperationsListSecurity security;
    public BaremetalsolutionOperationsListRequest withSecurity(BaremetalsolutionOperationsListSecurity security) {
        this.security = security;
        return this;
    }
}