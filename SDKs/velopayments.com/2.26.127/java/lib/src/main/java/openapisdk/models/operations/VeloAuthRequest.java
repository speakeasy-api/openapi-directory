package openapisdk.models.operations;



public class VeloAuthRequest {
    public VeloAuthQueryParams queryParams;
    public VeloAuthRequest withQueryParams(VeloAuthQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public VeloAuthSecurity security;
    public VeloAuthRequest withSecurity(VeloAuthSecurity security) {
        this.security = security;
        return this;
    }
}