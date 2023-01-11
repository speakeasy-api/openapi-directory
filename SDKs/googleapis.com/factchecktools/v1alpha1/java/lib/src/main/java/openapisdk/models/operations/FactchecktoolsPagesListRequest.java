package openapisdk.models.operations;



public class FactchecktoolsPagesListRequest {
    public FactchecktoolsPagesListQueryParams queryParams;
    public FactchecktoolsPagesListRequest withQueryParams(FactchecktoolsPagesListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public FactchecktoolsPagesListSecurity security;
    public FactchecktoolsPagesListRequest withSecurity(FactchecktoolsPagesListSecurity security) {
        this.security = security;
        return this;
    }
}