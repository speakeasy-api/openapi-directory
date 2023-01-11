package openapisdk.models.operations;



public class ValidateRequest {
    public ValidateQueryParams queryParams;
    public ValidateRequest withQueryParams(ValidateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ValidateHeaders headers;
    public ValidateRequest withHeaders(ValidateHeaders headers) {
        this.headers = headers;
        return this;
    }
}