package openapisdk.models.operations;



public class FirebaseappcheckProjectsAppsExchangeAppAttestAttestationResponse {
    public String contentType;
    public FirebaseappcheckProjectsAppsExchangeAppAttestAttestationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleFirebaseAppcheckV1ExchangeAppAttestAttestationResponse googleFirebaseAppcheckV1ExchangeAppAttestAttestationResponse;
    public FirebaseappcheckProjectsAppsExchangeAppAttestAttestationResponse withGoogleFirebaseAppcheckV1ExchangeAppAttestAttestationResponse(openapisdk.models.shared.GoogleFirebaseAppcheckV1ExchangeAppAttestAttestationResponse googleFirebaseAppcheckV1ExchangeAppAttestAttestationResponse) {
        this.googleFirebaseAppcheckV1ExchangeAppAttestAttestationResponse = googleFirebaseAppcheckV1ExchangeAppAttestAttestationResponse;
        return this;
    }
    public Long statusCode;
    public FirebaseappcheckProjectsAppsExchangeAppAttestAttestationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}