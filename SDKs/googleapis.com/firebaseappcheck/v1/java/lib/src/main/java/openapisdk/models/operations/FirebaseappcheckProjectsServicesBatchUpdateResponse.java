package openapisdk.models.operations;



public class FirebaseappcheckProjectsServicesBatchUpdateResponse {
    public String contentType;
    public FirebaseappcheckProjectsServicesBatchUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleFirebaseAppcheckV1BatchUpdateServicesResponse googleFirebaseAppcheckV1BatchUpdateServicesResponse;
    public FirebaseappcheckProjectsServicesBatchUpdateResponse withGoogleFirebaseAppcheckV1BatchUpdateServicesResponse(openapisdk.models.shared.GoogleFirebaseAppcheckV1BatchUpdateServicesResponse googleFirebaseAppcheckV1BatchUpdateServicesResponse) {
        this.googleFirebaseAppcheckV1BatchUpdateServicesResponse = googleFirebaseAppcheckV1BatchUpdateServicesResponse;
        return this;
    }
    public Long statusCode;
    public FirebaseappcheckProjectsServicesBatchUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}