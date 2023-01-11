package openapisdk.models.operations;



public class DfareportingSizesGetRequest {
    public DfareportingSizesGetPathParams pathParams;
    public DfareportingSizesGetRequest withPathParams(DfareportingSizesGetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DfareportingSizesGetQueryParams queryParams;
    public DfareportingSizesGetRequest withQueryParams(DfareportingSizesGetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DfareportingSizesGetSecurity security;
    public DfareportingSizesGetRequest withSecurity(DfareportingSizesGetSecurity security) {
        this.security = security;
        return this;
    }
}