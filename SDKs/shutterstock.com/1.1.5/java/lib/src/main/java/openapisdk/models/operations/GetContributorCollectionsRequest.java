package openapisdk.models.operations;



public class GetContributorCollectionsRequest {
    public GetContributorCollectionsPathParams pathParams;
    public GetContributorCollectionsRequest withPathParams(GetContributorCollectionsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetContributorCollectionsSecurity security;
    public GetContributorCollectionsRequest withSecurity(GetContributorCollectionsSecurity security) {
        this.security = security;
        return this;
    }
}