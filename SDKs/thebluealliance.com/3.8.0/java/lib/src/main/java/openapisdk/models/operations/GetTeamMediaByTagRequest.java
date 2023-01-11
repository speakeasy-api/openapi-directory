package openapisdk.models.operations;



public class GetTeamMediaByTagRequest {
    public GetTeamMediaByTagPathParams pathParams;
    public GetTeamMediaByTagRequest withPathParams(GetTeamMediaByTagPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetTeamMediaByTagHeaders headers;
    public GetTeamMediaByTagRequest withHeaders(GetTeamMediaByTagHeaders headers) {
        this.headers = headers;
        return this;
    }
    public GetTeamMediaByTagSecurity security;
    public GetTeamMediaByTagRequest withSecurity(GetTeamMediaByTagSecurity security) {
        this.security = security;
        return this;
    }
}