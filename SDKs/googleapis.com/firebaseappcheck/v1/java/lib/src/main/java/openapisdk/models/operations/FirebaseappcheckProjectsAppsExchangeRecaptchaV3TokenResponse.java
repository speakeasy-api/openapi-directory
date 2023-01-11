package openapisdk.models.operations;



public class FirebaseappcheckProjectsAppsExchangeRecaptchaV3TokenResponse {
    public String contentType;
    public FirebaseappcheckProjectsAppsExchangeRecaptchaV3TokenResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleFirebaseAppcheckV1AppCheckToken googleFirebaseAppcheckV1AppCheckToken;
    public FirebaseappcheckProjectsAppsExchangeRecaptchaV3TokenResponse withGoogleFirebaseAppcheckV1AppCheckToken(openapisdk.models.shared.GoogleFirebaseAppcheckV1AppCheckToken googleFirebaseAppcheckV1AppCheckToken) {
        this.googleFirebaseAppcheckV1AppCheckToken = googleFirebaseAppcheckV1AppCheckToken;
        return this;
    }
    public Long statusCode;
    public FirebaseappcheckProjectsAppsExchangeRecaptchaV3TokenResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}