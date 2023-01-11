package openapisdk.models.operations;



public class ReadAccountDetailsRequest {
    public ReadAccountDetailsPathParams pathParams;
    public ReadAccountDetailsRequest withPathParams(ReadAccountDetailsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ReadAccountDetailsQueryParams queryParams;
    public ReadAccountDetailsRequest withQueryParams(ReadAccountDetailsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ReadAccountDetailsHeaders headers;
    public ReadAccountDetailsRequest withHeaders(ReadAccountDetailsHeaders headers) {
        this.headers = headers;
        return this;
    }
    public ReadAccountDetailsSecurity security;
    public ReadAccountDetailsRequest withSecurity(ReadAccountDetailsSecurity security) {
        this.security = security;
        return this;
    }
}