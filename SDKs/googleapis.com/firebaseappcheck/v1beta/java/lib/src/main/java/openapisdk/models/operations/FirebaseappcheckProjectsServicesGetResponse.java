package openapisdk.models.operations;



public class FirebaseappcheckProjectsServicesGetResponse {
    public String contentType;
    public FirebaseappcheckProjectsServicesGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleFirebaseAppcheckV1betaService googleFirebaseAppcheckV1betaService;
    public FirebaseappcheckProjectsServicesGetResponse withGoogleFirebaseAppcheckV1betaService(openapisdk.models.shared.GoogleFirebaseAppcheckV1betaService googleFirebaseAppcheckV1betaService) {
        this.googleFirebaseAppcheckV1betaService = googleFirebaseAppcheckV1betaService;
        return this;
    }
    public Long statusCode;
    public FirebaseappcheckProjectsServicesGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}