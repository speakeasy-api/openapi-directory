package openapisdk.models.operations;



public class GetContributorCollectionItemsRequest {
    public GetContributorCollectionItemsPathParams pathParams;
    public GetContributorCollectionItemsRequest withPathParams(GetContributorCollectionItemsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetContributorCollectionItemsQueryParams queryParams;
    public GetContributorCollectionItemsRequest withQueryParams(GetContributorCollectionItemsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetContributorCollectionItemsSecurity security;
    public GetContributorCollectionItemsRequest withSecurity(GetContributorCollectionItemsSecurity security) {
        this.security = security;
        return this;
    }
}