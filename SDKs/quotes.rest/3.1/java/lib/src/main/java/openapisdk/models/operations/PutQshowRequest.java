package openapisdk.models.operations;



public class PutQshowRequest {
    public PutQshowQueryParams queryParams;
    public PutQshowRequest withQueryParams(PutQshowQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PutQshowSecurity security;
    public PutQshowRequest withSecurity(PutQshowSecurity security) {
        this.security = security;
        return this;
    }
}