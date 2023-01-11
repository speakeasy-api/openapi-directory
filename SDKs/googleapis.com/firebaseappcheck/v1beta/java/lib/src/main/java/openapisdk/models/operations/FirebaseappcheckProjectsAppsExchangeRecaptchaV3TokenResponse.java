package openapisdk.models.operations;



public class FirebaseappcheckProjectsAppsExchangeRecaptchaV3TokenResponse {
    public String contentType;
    public FirebaseappcheckProjectsAppsExchangeRecaptchaV3TokenResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleFirebaseAppcheckV1betaAppCheckToken googleFirebaseAppcheckV1betaAppCheckToken;
    public FirebaseappcheckProjectsAppsExchangeRecaptchaV3TokenResponse withGoogleFirebaseAppcheckV1betaAppCheckToken(openapisdk.models.shared.GoogleFirebaseAppcheckV1betaAppCheckToken googleFirebaseAppcheckV1betaAppCheckToken) {
        this.googleFirebaseAppcheckV1betaAppCheckToken = googleFirebaseAppcheckV1betaAppCheckToken;
        return this;
    }
    public Long statusCode;
    public FirebaseappcheckProjectsAppsExchangeRecaptchaV3TokenResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}