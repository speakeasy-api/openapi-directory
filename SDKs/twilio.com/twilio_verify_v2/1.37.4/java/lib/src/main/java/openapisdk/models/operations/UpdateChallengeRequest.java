package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateChallengeRequest {
    public String serverURL;
    public UpdateChallengeRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public UpdateChallengePathParams pathParams;
    public UpdateChallengeRequest withPathParams(UpdateChallengePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public UpdateChallengeUpdateChallengeRequest request;
    public UpdateChallengeRequest withRequest(UpdateChallengeUpdateChallengeRequest request) {
        this.request = request;
        return this;
    }
    public UpdateChallengeSecurity security;
    public UpdateChallengeRequest withSecurity(UpdateChallengeSecurity security) {
        this.security = security;
        return this;
    }
}