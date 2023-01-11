package openapisdk.models.operations;



public class GetTeamAwardsRequest {
    public GetTeamAwardsPathParams pathParams;
    public GetTeamAwardsRequest withPathParams(GetTeamAwardsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetTeamAwardsHeaders headers;
    public GetTeamAwardsRequest withHeaders(GetTeamAwardsHeaders headers) {
        this.headers = headers;
        return this;
    }
    public GetTeamAwardsSecurity security;
    public GetTeamAwardsRequest withSecurity(GetTeamAwardsSecurity security) {
        this.security = security;
        return this;
    }
}