package openapisdk.models.operations;



public class DowngradeUserProofreaderRequest {
    public DowngradeUserProofreaderPathParams pathParams;
    public DowngradeUserProofreaderRequest withPathParams(DowngradeUserProofreaderPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DowngradeUserProofreaderSecurity security;
    public DowngradeUserProofreaderRequest withSecurity(DowngradeUserProofreaderSecurity security) {
        this.security = security;
        return this;
    }
}