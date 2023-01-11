package openapisdk.models.operations;



public class FirebaseappcheckProjectsAppsExchangeSafetyNetTokenResponse {
    public String contentType;
    public FirebaseappcheckProjectsAppsExchangeSafetyNetTokenResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleFirebaseAppcheckV1betaAppCheckToken googleFirebaseAppcheckV1betaAppCheckToken;
    public FirebaseappcheckProjectsAppsExchangeSafetyNetTokenResponse withGoogleFirebaseAppcheckV1betaAppCheckToken(openapisdk.models.shared.GoogleFirebaseAppcheckV1betaAppCheckToken googleFirebaseAppcheckV1betaAppCheckToken) {
        this.googleFirebaseAppcheckV1betaAppCheckToken = googleFirebaseAppcheckV1betaAppCheckToken;
        return this;
    }
    public Long statusCode;
    public FirebaseappcheckProjectsAppsExchangeSafetyNetTokenResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}