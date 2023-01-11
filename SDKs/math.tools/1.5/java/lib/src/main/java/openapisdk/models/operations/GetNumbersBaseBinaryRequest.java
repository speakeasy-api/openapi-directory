package openapisdk.models.operations;



public class GetNumbersBaseBinaryRequest {
    public GetNumbersBaseBinaryQueryParams queryParams;
    public GetNumbersBaseBinaryRequest withQueryParams(GetNumbersBaseBinaryQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetNumbersBaseBinarySecurity security;
    public GetNumbersBaseBinaryRequest withSecurity(GetNumbersBaseBinarySecurity security) {
        this.security = security;
        return this;
    }
}