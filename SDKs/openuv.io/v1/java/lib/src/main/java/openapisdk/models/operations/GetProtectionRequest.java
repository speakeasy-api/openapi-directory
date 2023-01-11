package openapisdk.models.operations;



public class GetProtectionRequest {
    public GetProtectionQueryParams queryParams;
    public GetProtectionRequest withQueryParams(GetProtectionQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetProtectionHeaders headers;
    public GetProtectionRequest withHeaders(GetProtectionHeaders headers) {
        this.headers = headers;
        return this;
    }
}