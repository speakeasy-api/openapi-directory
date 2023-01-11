package openapisdk.models.operations;



public class GetNumbersIsCubeRequest {
    public GetNumbersIsCubeQueryParams queryParams;
    public GetNumbersIsCubeRequest withQueryParams(GetNumbersIsCubeQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetNumbersIsCubeSecurity security;
    public GetNumbersIsCubeRequest withSecurity(GetNumbersIsCubeSecurity security) {
        this.security = security;
        return this;
    }
}