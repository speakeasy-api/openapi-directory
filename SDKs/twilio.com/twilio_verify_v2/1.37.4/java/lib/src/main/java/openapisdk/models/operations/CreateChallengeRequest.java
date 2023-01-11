package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateChallengeRequest {
    public String serverURL;
    public CreateChallengeRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public CreateChallengePathParams pathParams;
    public CreateChallengeRequest withPathParams(CreateChallengePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreateChallengeCreateChallengeRequest request;
    public CreateChallengeRequest withRequest(CreateChallengeCreateChallengeRequest request) {
        this.request = request;
        return this;
    }
    public CreateChallengeSecurity security;
    public CreateChallengeRequest withSecurity(CreateChallengeSecurity security) {
        this.security = security;
        return this;
    }
}