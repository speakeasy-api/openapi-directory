package openapisdk.models.operations;



public class GetContributorRequest {
    public GetContributorPathParams pathParams;
    public GetContributorRequest withPathParams(GetContributorPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetContributorSecurity security;
    public GetContributorRequest withSecurity(GetContributorSecurity security) {
        this.security = security;
        return this;
    }
}