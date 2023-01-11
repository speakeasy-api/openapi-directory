package openapisdk.models.operations;



public class GetStatusRequest {
    public GetStatusHeaders headers;
    public GetStatusRequest withHeaders(GetStatusHeaders headers) {
        this.headers = headers;
        return this;
    }
    public GetStatusSecurity security;
    public GetStatusRequest withSecurity(GetStatusSecurity security) {
        this.security = security;
        return this;
    }
}