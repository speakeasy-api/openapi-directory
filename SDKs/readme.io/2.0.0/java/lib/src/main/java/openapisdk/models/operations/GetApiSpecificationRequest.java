package openapisdk.models.operations;



public class GetApiSpecificationRequest {
    public GetApiSpecificationQueryParams queryParams;
    public GetApiSpecificationRequest withQueryParams(GetApiSpecificationQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetApiSpecificationHeaders headers;
    public GetApiSpecificationRequest withHeaders(GetApiSpecificationHeaders headers) {
        this.headers = headers;
        return this;
    }
    public GetApiSpecificationSecurity security;
    public GetApiSpecificationRequest withSecurity(GetApiSpecificationSecurity security) {
        this.security = security;
        return this;
    }
}