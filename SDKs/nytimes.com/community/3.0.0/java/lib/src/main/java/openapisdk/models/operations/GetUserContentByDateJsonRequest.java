package openapisdk.models.operations;



public class GetUserContentByDateJsonRequest {
    public GetUserContentByDateJsonQueryParams queryParams;
    public GetUserContentByDateJsonRequest withQueryParams(GetUserContentByDateJsonQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetUserContentByDateJsonSecurity security;
    public GetUserContentByDateJsonRequest withSecurity(GetUserContentByDateJsonSecurity security) {
        this.security = security;
        return this;
    }
}