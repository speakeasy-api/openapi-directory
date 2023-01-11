package openapisdk.models.operations;



public class GetProjectsAlt1Request {
    public GetProjectsAlt1QueryParams queryParams;
    public GetProjectsAlt1Request withQueryParams(GetProjectsAlt1QueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetProjectsAlt1Security security;
    public GetProjectsAlt1Request withSecurity(GetProjectsAlt1Security security) {
        this.security = security;
        return this;
    }
}