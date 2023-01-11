package openapisdk.models.operations;



public class GetNumbersPiRequest {
    public GetNumbersPiQueryParams queryParams;
    public GetNumbersPiRequest withQueryParams(GetNumbersPiQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetNumbersPiSecurity security;
    public GetNumbersPiRequest withSecurity(GetNumbersPiSecurity security) {
        this.security = security;
        return this;
    }
}