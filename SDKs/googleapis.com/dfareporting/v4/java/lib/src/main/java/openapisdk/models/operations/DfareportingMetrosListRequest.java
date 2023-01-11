package openapisdk.models.operations;



public class DfareportingMetrosListRequest {
    public DfareportingMetrosListPathParams pathParams;
    public DfareportingMetrosListRequest withPathParams(DfareportingMetrosListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DfareportingMetrosListQueryParams queryParams;
    public DfareportingMetrosListRequest withQueryParams(DfareportingMetrosListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DfareportingMetrosListSecurity security;
    public DfareportingMetrosListRequest withSecurity(DfareportingMetrosListSecurity security) {
        this.security = security;
        return this;
    }
}