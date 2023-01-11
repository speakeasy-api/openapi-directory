package openapisdk.models.operations;



public class LocalservicesAccountReportsSearchRequest {
    public LocalservicesAccountReportsSearchQueryParams queryParams;
    public LocalservicesAccountReportsSearchRequest withQueryParams(LocalservicesAccountReportsSearchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public LocalservicesAccountReportsSearchSecurity security;
    public LocalservicesAccountReportsSearchRequest withSecurity(LocalservicesAccountReportsSearchSecurity security) {
        this.security = security;
        return this;
    }
}