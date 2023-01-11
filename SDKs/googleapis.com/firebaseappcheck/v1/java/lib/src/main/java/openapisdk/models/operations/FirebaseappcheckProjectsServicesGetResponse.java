package openapisdk.models.operations;



public class FirebaseappcheckProjectsServicesGetResponse {
    public String contentType;
    public FirebaseappcheckProjectsServicesGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleFirebaseAppcheckV1Service googleFirebaseAppcheckV1Service;
    public FirebaseappcheckProjectsServicesGetResponse withGoogleFirebaseAppcheckV1Service(openapisdk.models.shared.GoogleFirebaseAppcheckV1Service googleFirebaseAppcheckV1Service) {
        this.googleFirebaseAppcheckV1Service = googleFirebaseAppcheckV1Service;
        return this;
    }
    public Long statusCode;
    public FirebaseappcheckProjectsServicesGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}