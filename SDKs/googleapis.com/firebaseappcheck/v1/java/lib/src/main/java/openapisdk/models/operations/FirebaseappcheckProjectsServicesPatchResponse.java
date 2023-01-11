package openapisdk.models.operations;



public class FirebaseappcheckProjectsServicesPatchResponse {
    public String contentType;
    public FirebaseappcheckProjectsServicesPatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleFirebaseAppcheckV1Service googleFirebaseAppcheckV1Service;
    public FirebaseappcheckProjectsServicesPatchResponse withGoogleFirebaseAppcheckV1Service(openapisdk.models.shared.GoogleFirebaseAppcheckV1Service googleFirebaseAppcheckV1Service) {
        this.googleFirebaseAppcheckV1Service = googleFirebaseAppcheckV1Service;
        return this;
    }
    public Long statusCode;
    public FirebaseappcheckProjectsServicesPatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}