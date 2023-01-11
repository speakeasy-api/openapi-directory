package openapisdk.models.operations;



public class LookupUmprnRequest {
    public LookupUmprnPathParams pathParams;
    public LookupUmprnRequest withPathParams(LookupUmprnPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public LookupUmprnQueryParams queryParams;
    public LookupUmprnRequest withQueryParams(LookupUmprnQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public LookupUmprnSecurity security;
    public LookupUmprnRequest withSecurity(LookupUmprnSecurity security) {
        this.security = security;
        return this;
    }
}