package openapisdk.models.operations;



public class SecuritycenterProjectsBigQueryExportsListRequest {
    public SecuritycenterProjectsBigQueryExportsListPathParams pathParams;
    public SecuritycenterProjectsBigQueryExportsListRequest withPathParams(SecuritycenterProjectsBigQueryExportsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public SecuritycenterProjectsBigQueryExportsListQueryParams queryParams;
    public SecuritycenterProjectsBigQueryExportsListRequest withQueryParams(SecuritycenterProjectsBigQueryExportsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public SecuritycenterProjectsBigQueryExportsListSecurity security;
    public SecuritycenterProjectsBigQueryExportsListRequest withSecurity(SecuritycenterProjectsBigQueryExportsListSecurity security) {
        this.security = security;
        return this;
    }
}