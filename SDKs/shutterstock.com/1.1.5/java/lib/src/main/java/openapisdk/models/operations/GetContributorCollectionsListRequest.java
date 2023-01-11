package openapisdk.models.operations;



public class GetContributorCollectionsListRequest {
    public GetContributorCollectionsListPathParams pathParams;
    public GetContributorCollectionsListRequest withPathParams(GetContributorCollectionsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetContributorCollectionsListQueryParams queryParams;
    public GetContributorCollectionsListRequest withQueryParams(GetContributorCollectionsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetContributorCollectionsListSecurity security;
    public GetContributorCollectionsListRequest withSecurity(GetContributorCollectionsListSecurity security) {
        this.security = security;
        return this;
    }
}