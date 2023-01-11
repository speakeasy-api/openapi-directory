package openapisdk.models.operations;



public class FirebaseappcheckProjectsAppsExchangeAppAttestAttestationResponse {
    public String contentType;
    public FirebaseappcheckProjectsAppsExchangeAppAttestAttestationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleFirebaseAppcheckV1betaExchangeAppAttestAttestationResponse googleFirebaseAppcheckV1betaExchangeAppAttestAttestationResponse;
    public FirebaseappcheckProjectsAppsExchangeAppAttestAttestationResponse withGoogleFirebaseAppcheckV1betaExchangeAppAttestAttestationResponse(openapisdk.models.shared.GoogleFirebaseAppcheckV1betaExchangeAppAttestAttestationResponse googleFirebaseAppcheckV1betaExchangeAppAttestAttestationResponse) {
        this.googleFirebaseAppcheckV1betaExchangeAppAttestAttestationResponse = googleFirebaseAppcheckV1betaExchangeAppAttestAttestationResponse;
        return this;
    }
    public Long statusCode;
    public FirebaseappcheckProjectsAppsExchangeAppAttestAttestationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}