package openapisdk.models.operations;



public class GetTeamEventAwardsRequest {
    public GetTeamEventAwardsPathParams pathParams;
    public GetTeamEventAwardsRequest withPathParams(GetTeamEventAwardsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetTeamEventAwardsHeaders headers;
    public GetTeamEventAwardsRequest withHeaders(GetTeamEventAwardsHeaders headers) {
        this.headers = headers;
        return this;
    }
    public GetTeamEventAwardsSecurity security;
    public GetTeamEventAwardsRequest withSecurity(GetTeamEventAwardsSecurity security) {
        this.security = security;
        return this;
    }
}