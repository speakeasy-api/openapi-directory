package openapisdk.models.operations;



public class OndStatusRequest {
    public OndStatusQueryParams queryParams;
    public OndStatusRequest withQueryParams(OndStatusQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public OndStatusHeaders headers;
    public OndStatusRequest withHeaders(OndStatusHeaders headers) {
        this.headers = headers;
        return this;
    }
    public OndStatusSecurity security;
    public OndStatusRequest withSecurity(OndStatusSecurity security) {
        this.security = security;
        return this;
    }
}