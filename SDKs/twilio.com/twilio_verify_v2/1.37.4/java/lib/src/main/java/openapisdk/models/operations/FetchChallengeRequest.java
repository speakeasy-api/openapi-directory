package openapisdk.models.operations;



public class FetchChallengeRequest {
    public String serverURL;
    public FetchChallengeRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchChallengePathParams pathParams;
    public FetchChallengeRequest withPathParams(FetchChallengePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchChallengeSecurity security;
    public FetchChallengeRequest withSecurity(FetchChallengeSecurity security) {
        this.security = security;
        return this;
    }
}