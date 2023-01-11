package openapisdk.models.operations;



public class ListChallengeRequest {
    public String serverURL;
    public ListChallengeRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListChallengePathParams pathParams;
    public ListChallengeRequest withPathParams(ListChallengePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListChallengeQueryParams queryParams;
    public ListChallengeRequest withQueryParams(ListChallengeQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListChallengeSecurity security;
    public ListChallengeRequest withSecurity(ListChallengeSecurity security) {
        this.security = security;
        return this;
    }
}