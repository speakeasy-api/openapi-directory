package openapisdk.models.operations;



public class GetTeamEventsRequest {
    public GetTeamEventsPathParams pathParams;
    public GetTeamEventsRequest withPathParams(GetTeamEventsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetTeamEventsHeaders headers;
    public GetTeamEventsRequest withHeaders(GetTeamEventsHeaders headers) {
        this.headers = headers;
        return this;
    }
    public GetTeamEventsSecurity security;
    public GetTeamEventsRequest withSecurity(GetTeamEventsSecurity security) {
        this.security = security;
        return this;
    }
}