package openapisdk.models.operations;



public class FirebaseappcheckProjectsAppsExchangeRecaptchaTokenResponse {
    public String contentType;
    public FirebaseappcheckProjectsAppsExchangeRecaptchaTokenResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleFirebaseAppcheckV1betaAppCheckToken googleFirebaseAppcheckV1betaAppCheckToken;
    public FirebaseappcheckProjectsAppsExchangeRecaptchaTokenResponse withGoogleFirebaseAppcheckV1betaAppCheckToken(openapisdk.models.shared.GoogleFirebaseAppcheckV1betaAppCheckToken googleFirebaseAppcheckV1betaAppCheckToken) {
        this.googleFirebaseAppcheckV1betaAppCheckToken = googleFirebaseAppcheckV1betaAppCheckToken;
        return this;
    }
    public Long statusCode;
    public FirebaseappcheckProjectsAppsExchangeRecaptchaTokenResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}