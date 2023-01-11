package openapisdk.models.operations;



public class FirebaseappcheckProjectsServicesPatchResponse {
    public String contentType;
    public FirebaseappcheckProjectsServicesPatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleFirebaseAppcheckV1betaService googleFirebaseAppcheckV1betaService;
    public FirebaseappcheckProjectsServicesPatchResponse withGoogleFirebaseAppcheckV1betaService(openapisdk.models.shared.GoogleFirebaseAppcheckV1betaService googleFirebaseAppcheckV1betaService) {
        this.googleFirebaseAppcheckV1betaService = googleFirebaseAppcheckV1betaService;
        return this;
    }
    public Long statusCode;
    public FirebaseappcheckProjectsServicesPatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}