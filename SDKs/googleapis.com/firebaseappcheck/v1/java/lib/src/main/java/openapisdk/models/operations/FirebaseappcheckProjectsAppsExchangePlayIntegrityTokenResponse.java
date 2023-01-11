package openapisdk.models.operations;



public class FirebaseappcheckProjectsAppsExchangePlayIntegrityTokenResponse {
    public String contentType;
    public FirebaseappcheckProjectsAppsExchangePlayIntegrityTokenResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleFirebaseAppcheckV1AppCheckToken googleFirebaseAppcheckV1AppCheckToken;
    public FirebaseappcheckProjectsAppsExchangePlayIntegrityTokenResponse withGoogleFirebaseAppcheckV1AppCheckToken(openapisdk.models.shared.GoogleFirebaseAppcheckV1AppCheckToken googleFirebaseAppcheckV1AppCheckToken) {
        this.googleFirebaseAppcheckV1AppCheckToken = googleFirebaseAppcheckV1AppCheckToken;
        return this;
    }
    public Long statusCode;
    public FirebaseappcheckProjectsAppsExchangePlayIntegrityTokenResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}