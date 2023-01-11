package openapisdk.models.operations;



public class GetNumbersBaseHexRequest {
    public GetNumbersBaseHexQueryParams queryParams;
    public GetNumbersBaseHexRequest withQueryParams(GetNumbersBaseHexQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetNumbersBaseHexSecurity security;
    public GetNumbersBaseHexRequest withSecurity(GetNumbersBaseHexSecurity security) {
        this.security = security;
        return this;
    }
}