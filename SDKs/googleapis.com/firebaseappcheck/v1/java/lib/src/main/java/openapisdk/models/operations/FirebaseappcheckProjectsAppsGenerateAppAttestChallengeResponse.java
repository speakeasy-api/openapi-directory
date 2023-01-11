package openapisdk.models.operations;



public class FirebaseappcheckProjectsAppsGenerateAppAttestChallengeResponse {
    public String contentType;
    public FirebaseappcheckProjectsAppsGenerateAppAttestChallengeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleFirebaseAppcheckV1GenerateAppAttestChallengeResponse googleFirebaseAppcheckV1GenerateAppAttestChallengeResponse;
    public FirebaseappcheckProjectsAppsGenerateAppAttestChallengeResponse withGoogleFirebaseAppcheckV1GenerateAppAttestChallengeResponse(openapisdk.models.shared.GoogleFirebaseAppcheckV1GenerateAppAttestChallengeResponse googleFirebaseAppcheckV1GenerateAppAttestChallengeResponse) {
        this.googleFirebaseAppcheckV1GenerateAppAttestChallengeResponse = googleFirebaseAppcheckV1GenerateAppAttestChallengeResponse;
        return this;
    }
    public Long statusCode;
    public FirebaseappcheckProjectsAppsGenerateAppAttestChallengeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}