package openapisdk.models.operations;



public class FirebaseappcheckProjectsAppsGenerateAppAttestChallengeResponse {
    public String contentType;
    public FirebaseappcheckProjectsAppsGenerateAppAttestChallengeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleFirebaseAppcheckV1betaGenerateAppAttestChallengeResponse googleFirebaseAppcheckV1betaGenerateAppAttestChallengeResponse;
    public FirebaseappcheckProjectsAppsGenerateAppAttestChallengeResponse withGoogleFirebaseAppcheckV1betaGenerateAppAttestChallengeResponse(openapisdk.models.shared.GoogleFirebaseAppcheckV1betaGenerateAppAttestChallengeResponse googleFirebaseAppcheckV1betaGenerateAppAttestChallengeResponse) {
        this.googleFirebaseAppcheckV1betaGenerateAppAttestChallengeResponse = googleFirebaseAppcheckV1betaGenerateAppAttestChallengeResponse;
        return this;
    }
    public Long statusCode;
    public FirebaseappcheckProjectsAppsGenerateAppAttestChallengeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}