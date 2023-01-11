package openapisdk.models.operations;



public class GetUserPopularPairsRequest {
    public GetUserPopularPairsPathParams pathParams;
    public GetUserPopularPairsRequest withPathParams(GetUserPopularPairsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetUserPopularPairsSecurity security;
    public GetUserPopularPairsRequest withSecurity(GetUserPopularPairsSecurity security) {
        this.security = security;
        return this;
    }
}