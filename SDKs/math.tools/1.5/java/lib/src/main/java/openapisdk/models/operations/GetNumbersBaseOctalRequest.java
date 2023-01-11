package openapisdk.models.operations;



public class GetNumbersBaseOctalRequest {
    public GetNumbersBaseOctalQueryParams queryParams;
    public GetNumbersBaseOctalRequest withQueryParams(GetNumbersBaseOctalQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetNumbersBaseOctalSecurity security;
    public GetNumbersBaseOctalRequest withSecurity(GetNumbersBaseOctalSecurity security) {
        this.security = security;
        return this;
    }
}