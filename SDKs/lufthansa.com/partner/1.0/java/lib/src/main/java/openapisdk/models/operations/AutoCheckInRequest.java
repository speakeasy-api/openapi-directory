package openapisdk.models.operations;



public class AutoCheckInRequest {
    public AutoCheckInPathParams pathParams;
    public AutoCheckInRequest withPathParams(AutoCheckInPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AutoCheckInQueryParams queryParams;
    public AutoCheckInRequest withQueryParams(AutoCheckInQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public AutoCheckInHeaders headers;
    public AutoCheckInRequest withHeaders(AutoCheckInHeaders headers) {
        this.headers = headers;
        return this;
    }
    public AutoCheckInSecurity security;
    public AutoCheckInRequest withSecurity(AutoCheckInSecurity security) {
        this.security = security;
        return this;
    }
}