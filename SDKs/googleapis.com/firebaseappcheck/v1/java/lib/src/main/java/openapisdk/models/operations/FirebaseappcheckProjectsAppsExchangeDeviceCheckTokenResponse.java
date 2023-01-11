package openapisdk.models.operations;



public class FirebaseappcheckProjectsAppsExchangeDeviceCheckTokenResponse {
    public String contentType;
    public FirebaseappcheckProjectsAppsExchangeDeviceCheckTokenResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleFirebaseAppcheckV1AppCheckToken googleFirebaseAppcheckV1AppCheckToken;
    public FirebaseappcheckProjectsAppsExchangeDeviceCheckTokenResponse withGoogleFirebaseAppcheckV1AppCheckToken(openapisdk.models.shared.GoogleFirebaseAppcheckV1AppCheckToken googleFirebaseAppcheckV1AppCheckToken) {
        this.googleFirebaseAppcheckV1AppCheckToken = googleFirebaseAppcheckV1AppCheckToken;
        return this;
    }
    public Long statusCode;
    public FirebaseappcheckProjectsAppsExchangeDeviceCheckTokenResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}