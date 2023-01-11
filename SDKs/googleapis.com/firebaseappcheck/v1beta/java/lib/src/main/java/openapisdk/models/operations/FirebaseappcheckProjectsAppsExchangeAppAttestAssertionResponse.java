package openapisdk.models.operations;



public class FirebaseappcheckProjectsAppsExchangeAppAttestAssertionResponse {
    public String contentType;
    public FirebaseappcheckProjectsAppsExchangeAppAttestAssertionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleFirebaseAppcheckV1betaAppCheckToken googleFirebaseAppcheckV1betaAppCheckToken;
    public FirebaseappcheckProjectsAppsExchangeAppAttestAssertionResponse withGoogleFirebaseAppcheckV1betaAppCheckToken(openapisdk.models.shared.GoogleFirebaseAppcheckV1betaAppCheckToken googleFirebaseAppcheckV1betaAppCheckToken) {
        this.googleFirebaseAppcheckV1betaAppCheckToken = googleFirebaseAppcheckV1betaAppCheckToken;
        return this;
    }
    public Long statusCode;
    public FirebaseappcheckProjectsAppsExchangeAppAttestAssertionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}