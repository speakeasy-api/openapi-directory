package openapisdk.models.operations;



public class GetUserContentUrlJsonRequest {
    public GetUserContentUrlJsonQueryParams queryParams;
    public GetUserContentUrlJsonRequest withQueryParams(GetUserContentUrlJsonQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetUserContentUrlJsonSecurity security;
    public GetUserContentUrlJsonRequest withSecurity(GetUserContentUrlJsonSecurity security) {
        this.security = security;
        return this;
    }
}