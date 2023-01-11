package openapisdk.models.operations;



public class FirebaseappcheckProjectsAppsExchangePlayIntegrityTokenResponse {
    public String contentType;
    public FirebaseappcheckProjectsAppsExchangePlayIntegrityTokenResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleFirebaseAppcheckV1betaAppCheckToken googleFirebaseAppcheckV1betaAppCheckToken;
    public FirebaseappcheckProjectsAppsExchangePlayIntegrityTokenResponse withGoogleFirebaseAppcheckV1betaAppCheckToken(openapisdk.models.shared.GoogleFirebaseAppcheckV1betaAppCheckToken googleFirebaseAppcheckV1betaAppCheckToken) {
        this.googleFirebaseAppcheckV1betaAppCheckToken = googleFirebaseAppcheckV1betaAppCheckToken;
        return this;
    }
    public Long statusCode;
    public FirebaseappcheckProjectsAppsExchangePlayIntegrityTokenResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}