package openapisdk.models.operations;



public class FaresRequest {
    public FaresQueryParams queryParams;
    public FaresRequest withQueryParams(FaresQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public FaresHeaders headers;
    public FaresRequest withHeaders(FaresHeaders headers) {
        this.headers = headers;
        return this;
    }
    public FaresSecurity security;
    public FaresRequest withSecurity(FaresSecurity security) {
        this.security = security;
        return this;
    }
}