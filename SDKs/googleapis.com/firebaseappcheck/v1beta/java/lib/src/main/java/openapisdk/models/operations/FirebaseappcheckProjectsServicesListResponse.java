package openapisdk.models.operations;



public class FirebaseappcheckProjectsServicesListResponse {
    public String contentType;
    public FirebaseappcheckProjectsServicesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleFirebaseAppcheckV1betaListServicesResponse googleFirebaseAppcheckV1betaListServicesResponse;
    public FirebaseappcheckProjectsServicesListResponse withGoogleFirebaseAppcheckV1betaListServicesResponse(openapisdk.models.shared.GoogleFirebaseAppcheckV1betaListServicesResponse googleFirebaseAppcheckV1betaListServicesResponse) {
        this.googleFirebaseAppcheckV1betaListServicesResponse = googleFirebaseAppcheckV1betaListServicesResponse;
        return this;
    }
    public Long statusCode;
    public FirebaseappcheckProjectsServicesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}