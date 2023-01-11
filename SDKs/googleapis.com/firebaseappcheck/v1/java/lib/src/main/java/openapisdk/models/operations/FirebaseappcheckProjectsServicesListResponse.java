package openapisdk.models.operations;



public class FirebaseappcheckProjectsServicesListResponse {
    public String contentType;
    public FirebaseappcheckProjectsServicesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleFirebaseAppcheckV1ListServicesResponse googleFirebaseAppcheckV1ListServicesResponse;
    public FirebaseappcheckProjectsServicesListResponse withGoogleFirebaseAppcheckV1ListServicesResponse(openapisdk.models.shared.GoogleFirebaseAppcheckV1ListServicesResponse googleFirebaseAppcheckV1ListServicesResponse) {
        this.googleFirebaseAppcheckV1ListServicesResponse = googleFirebaseAppcheckV1ListServicesResponse;
        return this;
    }
    public Long statusCode;
    public FirebaseappcheckProjectsServicesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}