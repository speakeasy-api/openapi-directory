package openapisdk.models.operations;



public class GetContributorListRequest {
    public GetContributorListQueryParams queryParams;
    public GetContributorListRequest withQueryParams(GetContributorListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetContributorListSecurity security;
    public GetContributorListRequest withSecurity(GetContributorListSecurity security) {
        this.security = security;
        return this;
    }
}