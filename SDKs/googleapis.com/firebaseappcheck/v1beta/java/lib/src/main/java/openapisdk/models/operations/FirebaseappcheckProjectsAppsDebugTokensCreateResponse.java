package openapisdk.models.operations;



public class FirebaseappcheckProjectsAppsDebugTokensCreateResponse {
    public String contentType;
    public FirebaseappcheckProjectsAppsDebugTokensCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleFirebaseAppcheckV1betaDebugToken googleFirebaseAppcheckV1betaDebugToken;
    public FirebaseappcheckProjectsAppsDebugTokensCreateResponse withGoogleFirebaseAppcheckV1betaDebugToken(openapisdk.models.shared.GoogleFirebaseAppcheckV1betaDebugToken googleFirebaseAppcheckV1betaDebugToken) {
        this.googleFirebaseAppcheckV1betaDebugToken = googleFirebaseAppcheckV1betaDebugToken;
        return this;
    }
    public Long statusCode;
    public FirebaseappcheckProjectsAppsDebugTokensCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}