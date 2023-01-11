package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FirebaseappcheckProjectsAppsGeneratePlayIntegrityChallengeRequest {
    public FirebaseappcheckProjectsAppsGeneratePlayIntegrityChallengePathParams pathParams;
    public FirebaseappcheckProjectsAppsGeneratePlayIntegrityChallengeRequest withPathParams(FirebaseappcheckProjectsAppsGeneratePlayIntegrityChallengePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FirebaseappcheckProjectsAppsGeneratePlayIntegrityChallengeQueryParams queryParams;
    public FirebaseappcheckProjectsAppsGeneratePlayIntegrityChallengeRequest withQueryParams(FirebaseappcheckProjectsAppsGeneratePlayIntegrityChallengeQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public FirebaseappcheckProjectsAppsGeneratePlayIntegrityChallengeRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
    public FirebaseappcheckProjectsAppsGeneratePlayIntegrityChallengeSecurity security;
    public FirebaseappcheckProjectsAppsGeneratePlayIntegrityChallengeRequest withSecurity(FirebaseappcheckProjectsAppsGeneratePlayIntegrityChallengeSecurity security) {
        this.security = security;
        return this;
    }
}