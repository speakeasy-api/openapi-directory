package openapisdk.models.operations;



public class GetTeamEventsSimpleRequest {
    public GetTeamEventsSimplePathParams pathParams;
    public GetTeamEventsSimpleRequest withPathParams(GetTeamEventsSimplePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetTeamEventsSimpleHeaders headers;
    public GetTeamEventsSimpleRequest withHeaders(GetTeamEventsSimpleHeaders headers) {
        this.headers = headers;
        return this;
    }
    public GetTeamEventsSimpleSecurity security;
    public GetTeamEventsSimpleRequest withSecurity(GetTeamEventsSimpleSecurity security) {
        this.security = security;
        return this;
    }
}