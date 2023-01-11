package openapisdk.models.operations;



public class GetDistrictRankingsRequest {
    public GetDistrictRankingsPathParams pathParams;
    public GetDistrictRankingsRequest withPathParams(GetDistrictRankingsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetDistrictRankingsHeaders headers;
    public GetDistrictRankingsRequest withHeaders(GetDistrictRankingsHeaders headers) {
        this.headers = headers;
        return this;
    }
    public GetDistrictRankingsSecurity security;
    public GetDistrictRankingsRequest withSecurity(GetDistrictRankingsSecurity security) {
        this.security = security;
        return this;
    }
}