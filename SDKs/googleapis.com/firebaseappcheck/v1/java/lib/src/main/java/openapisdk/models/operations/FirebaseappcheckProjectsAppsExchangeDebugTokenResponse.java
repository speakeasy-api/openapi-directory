package openapisdk.models.operations;



public class FirebaseappcheckProjectsAppsExchangeDebugTokenResponse {
    public String contentType;
    public FirebaseappcheckProjectsAppsExchangeDebugTokenResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleFirebaseAppcheckV1AppCheckToken googleFirebaseAppcheckV1AppCheckToken;
    public FirebaseappcheckProjectsAppsExchangeDebugTokenResponse withGoogleFirebaseAppcheckV1AppCheckToken(openapisdk.models.shared.GoogleFirebaseAppcheckV1AppCheckToken googleFirebaseAppcheckV1AppCheckToken) {
        this.googleFirebaseAppcheckV1AppCheckToken = googleFirebaseAppcheckV1AppCheckToken;
        return this;
    }
    public Long statusCode;
    public FirebaseappcheckProjectsAppsExchangeDebugTokenResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}