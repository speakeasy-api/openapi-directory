package openapisdk.models.operations;



public class DfareportingOrdersGetRequest {
    public DfareportingOrdersGetPathParams pathParams;
    public DfareportingOrdersGetRequest withPathParams(DfareportingOrdersGetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DfareportingOrdersGetQueryParams queryParams;
    public DfareportingOrdersGetRequest withQueryParams(DfareportingOrdersGetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DfareportingOrdersGetSecurity security;
    public DfareportingOrdersGetRequest withSecurity(DfareportingOrdersGetSecurity security) {
        this.security = security;
        return this;
    }
}