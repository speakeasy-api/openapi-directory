package openapisdk.models.operations;



public class GetApodRequest {
    public GetApodQueryParams queryParams;
    public GetApodRequest withQueryParams(GetApodQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetApodSecurity security;
    public GetApodRequest withSecurity(GetApodSecurity security) {
        this.security = security;
        return this;
    }
}