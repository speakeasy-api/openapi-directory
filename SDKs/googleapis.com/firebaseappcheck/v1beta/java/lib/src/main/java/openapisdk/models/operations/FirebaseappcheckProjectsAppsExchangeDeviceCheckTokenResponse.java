package openapisdk.models.operations;



public class FirebaseappcheckProjectsAppsExchangeDeviceCheckTokenResponse {
    public String contentType;
    public FirebaseappcheckProjectsAppsExchangeDeviceCheckTokenResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleFirebaseAppcheckV1betaAppCheckToken googleFirebaseAppcheckV1betaAppCheckToken;
    public FirebaseappcheckProjectsAppsExchangeDeviceCheckTokenResponse withGoogleFirebaseAppcheckV1betaAppCheckToken(openapisdk.models.shared.GoogleFirebaseAppcheckV1betaAppCheckToken googleFirebaseAppcheckV1betaAppCheckToken) {
        this.googleFirebaseAppcheckV1betaAppCheckToken = googleFirebaseAppcheckV1betaAppCheckToken;
        return this;
    }
    public Long statusCode;
    public FirebaseappcheckProjectsAppsExchangeDeviceCheckTokenResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}