package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FirebaseappcheckProjectsAppsGenerateAppAttestChallengeRequest {
    public FirebaseappcheckProjectsAppsGenerateAppAttestChallengePathParams pathParams;
    public FirebaseappcheckProjectsAppsGenerateAppAttestChallengeRequest withPathParams(FirebaseappcheckProjectsAppsGenerateAppAttestChallengePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FirebaseappcheckProjectsAppsGenerateAppAttestChallengeQueryParams queryParams;
    public FirebaseappcheckProjectsAppsGenerateAppAttestChallengeRequest withQueryParams(FirebaseappcheckProjectsAppsGenerateAppAttestChallengeQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public FirebaseappcheckProjectsAppsGenerateAppAttestChallengeRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
    public FirebaseappcheckProjectsAppsGenerateAppAttestChallengeSecurity security;
    public FirebaseappcheckProjectsAppsGenerateAppAttestChallengeRequest withSecurity(FirebaseappcheckProjectsAppsGenerateAppAttestChallengeSecurity security) {
        this.security = security;
        return this;
    }
}