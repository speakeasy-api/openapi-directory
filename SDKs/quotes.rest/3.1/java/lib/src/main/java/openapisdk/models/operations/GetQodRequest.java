package openapisdk.models.operations;



public class GetQodRequest {
    public GetQodQueryParams queryParams;
    public GetQodRequest withQueryParams(GetQodQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetQodSecurity security;
    public GetQodRequest withSecurity(GetQodSecurity security) {
        this.security = security;
        return this;
    }
}