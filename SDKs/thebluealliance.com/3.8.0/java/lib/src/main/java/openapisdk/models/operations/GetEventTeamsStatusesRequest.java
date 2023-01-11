package openapisdk.models.operations;



public class GetEventTeamsStatusesRequest {
    public GetEventTeamsStatusesPathParams pathParams;
    public GetEventTeamsStatusesRequest withPathParams(GetEventTeamsStatusesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetEventTeamsStatusesHeaders headers;
    public GetEventTeamsStatusesRequest withHeaders(GetEventTeamsStatusesHeaders headers) {
        this.headers = headers;
        return this;
    }
    public GetEventTeamsStatusesSecurity security;
    public GetEventTeamsStatusesRequest withSecurity(GetEventTeamsStatusesSecurity security) {
        this.security = security;
        return this;
    }
}