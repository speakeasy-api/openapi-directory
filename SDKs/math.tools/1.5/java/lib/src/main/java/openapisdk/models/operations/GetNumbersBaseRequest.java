package openapisdk.models.operations;



public class GetNumbersBaseRequest {
    public GetNumbersBaseQueryParams queryParams;
    public GetNumbersBaseRequest withQueryParams(GetNumbersBaseQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetNumbersBaseSecurity security;
    public GetNumbersBaseRequest withSecurity(GetNumbersBaseSecurity security) {
        this.security = security;
        return this;
    }
}