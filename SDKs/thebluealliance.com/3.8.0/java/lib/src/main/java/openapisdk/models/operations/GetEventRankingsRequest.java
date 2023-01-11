package openapisdk.models.operations;



public class GetEventRankingsRequest {
    public GetEventRankingsPathParams pathParams;
    public GetEventRankingsRequest withPathParams(GetEventRankingsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetEventRankingsHeaders headers;
    public GetEventRankingsRequest withHeaders(GetEventRankingsHeaders headers) {
        this.headers = headers;
        return this;
    }
    public GetEventRankingsSecurity security;
    public GetEventRankingsRequest withSecurity(GetEventRankingsSecurity security) {
        this.security = security;
        return this;
    }
}