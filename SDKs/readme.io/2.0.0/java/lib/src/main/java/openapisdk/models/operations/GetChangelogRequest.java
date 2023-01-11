package openapisdk.models.operations;



public class GetChangelogRequest {
    public GetChangelogPathParams pathParams;
    public GetChangelogRequest withPathParams(GetChangelogPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetChangelogSecurity security;
    public GetChangelogRequest withSecurity(GetChangelogSecurity security) {
        this.security = security;
        return this;
    }
}