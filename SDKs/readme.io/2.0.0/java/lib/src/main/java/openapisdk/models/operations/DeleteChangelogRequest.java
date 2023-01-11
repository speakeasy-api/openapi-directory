package openapisdk.models.operations;



public class DeleteChangelogRequest {
    public DeleteChangelogPathParams pathParams;
    public DeleteChangelogRequest withPathParams(DeleteChangelogPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteChangelogSecurity security;
    public DeleteChangelogRequest withSecurity(DeleteChangelogSecurity security) {
        this.security = security;
        return this;
    }
}