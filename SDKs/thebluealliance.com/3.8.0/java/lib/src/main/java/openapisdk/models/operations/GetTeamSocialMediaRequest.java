package openapisdk.models.operations;



public class GetTeamSocialMediaRequest {
    public GetTeamSocialMediaPathParams pathParams;
    public GetTeamSocialMediaRequest withPathParams(GetTeamSocialMediaPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetTeamSocialMediaHeaders headers;
    public GetTeamSocialMediaRequest withHeaders(GetTeamSocialMediaHeaders headers) {
        this.headers = headers;
        return this;
    }
    public GetTeamSocialMediaSecurity security;
    public GetTeamSocialMediaRequest withSecurity(GetTeamSocialMediaSecurity security) {
        this.security = security;
        return this;
    }
}