package openapisdk.models.operations;



public class FirebaseappcheckProjectsAppsExchangeCustomTokenResponse {
    public String contentType;
    public FirebaseappcheckProjectsAppsExchangeCustomTokenResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleFirebaseAppcheckV1AppCheckToken googleFirebaseAppcheckV1AppCheckToken;
    public FirebaseappcheckProjectsAppsExchangeCustomTokenResponse withGoogleFirebaseAppcheckV1AppCheckToken(openapisdk.models.shared.GoogleFirebaseAppcheckV1AppCheckToken googleFirebaseAppcheckV1AppCheckToken) {
        this.googleFirebaseAppcheckV1AppCheckToken = googleFirebaseAppcheckV1AppCheckToken;
        return this;
    }
    public Long statusCode;
    public FirebaseappcheckProjectsAppsExchangeCustomTokenResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}