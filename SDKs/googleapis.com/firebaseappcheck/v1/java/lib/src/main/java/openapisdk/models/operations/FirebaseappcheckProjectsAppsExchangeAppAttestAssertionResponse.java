package openapisdk.models.operations;



public class FirebaseappcheckProjectsAppsExchangeAppAttestAssertionResponse {
    public String contentType;
    public FirebaseappcheckProjectsAppsExchangeAppAttestAssertionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleFirebaseAppcheckV1AppCheckToken googleFirebaseAppcheckV1AppCheckToken;
    public FirebaseappcheckProjectsAppsExchangeAppAttestAssertionResponse withGoogleFirebaseAppcheckV1AppCheckToken(openapisdk.models.shared.GoogleFirebaseAppcheckV1AppCheckToken googleFirebaseAppcheckV1AppCheckToken) {
        this.googleFirebaseAppcheckV1AppCheckToken = googleFirebaseAppcheckV1AppCheckToken;
        return this;
    }
    public Long statusCode;
    public FirebaseappcheckProjectsAppsExchangeAppAttestAssertionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}