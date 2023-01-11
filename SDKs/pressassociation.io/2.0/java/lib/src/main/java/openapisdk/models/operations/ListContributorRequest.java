package openapisdk.models.operations;



public class ListContributorRequest {
    public ListContributorQueryParams queryParams;
    public ListContributorRequest withQueryParams(ListContributorQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListContributorSecurity security;
    public ListContributorRequest withSecurity(ListContributorSecurity security) {
        this.security = security;
        return this;
    }
}