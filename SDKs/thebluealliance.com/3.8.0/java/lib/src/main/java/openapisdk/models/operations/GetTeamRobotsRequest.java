package openapisdk.models.operations;



public class GetTeamRobotsRequest {
    public GetTeamRobotsPathParams pathParams;
    public GetTeamRobotsRequest withPathParams(GetTeamRobotsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetTeamRobotsHeaders headers;
    public GetTeamRobotsRequest withHeaders(GetTeamRobotsHeaders headers) {
        this.headers = headers;
        return this;
    }
    public GetTeamRobotsSecurity security;
    public GetTeamRobotsRequest withSecurity(GetTeamRobotsSecurity security) {
        this.security = security;
        return this;
    }
}