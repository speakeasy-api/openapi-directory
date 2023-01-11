package openapisdk.models.operations;



public class FirebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseTokenResponse {
    public String contentType;
    public FirebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseTokenResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleFirebaseAppcheckV1AppCheckToken googleFirebaseAppcheckV1AppCheckToken;
    public FirebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseTokenResponse withGoogleFirebaseAppcheckV1AppCheckToken(openapisdk.models.shared.GoogleFirebaseAppcheckV1AppCheckToken googleFirebaseAppcheckV1AppCheckToken) {
        this.googleFirebaseAppcheckV1AppCheckToken = googleFirebaseAppcheckV1AppCheckToken;
        return this;
    }
    public Long statusCode;
    public FirebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseTokenResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}