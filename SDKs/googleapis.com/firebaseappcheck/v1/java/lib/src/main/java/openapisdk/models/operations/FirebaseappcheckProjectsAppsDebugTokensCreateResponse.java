package openapisdk.models.operations;



public class FirebaseappcheckProjectsAppsDebugTokensCreateResponse {
    public String contentType;
    public FirebaseappcheckProjectsAppsDebugTokensCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleFirebaseAppcheckV1DebugToken googleFirebaseAppcheckV1DebugToken;
    public FirebaseappcheckProjectsAppsDebugTokensCreateResponse withGoogleFirebaseAppcheckV1DebugToken(openapisdk.models.shared.GoogleFirebaseAppcheckV1DebugToken googleFirebaseAppcheckV1DebugToken) {
        this.googleFirebaseAppcheckV1DebugToken = googleFirebaseAppcheckV1DebugToken;
        return this;
    }
    public Long statusCode;
    public FirebaseappcheckProjectsAppsDebugTokensCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}