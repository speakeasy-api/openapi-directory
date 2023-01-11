package openapisdk.models.operations;



public class FirebaseappcheckProjectsServicesBatchUpdateResponse {
    public String contentType;
    public FirebaseappcheckProjectsServicesBatchUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleFirebaseAppcheckV1betaBatchUpdateServicesResponse googleFirebaseAppcheckV1betaBatchUpdateServicesResponse;
    public FirebaseappcheckProjectsServicesBatchUpdateResponse withGoogleFirebaseAppcheckV1betaBatchUpdateServicesResponse(openapisdk.models.shared.GoogleFirebaseAppcheckV1betaBatchUpdateServicesResponse googleFirebaseAppcheckV1betaBatchUpdateServicesResponse) {
        this.googleFirebaseAppcheckV1betaBatchUpdateServicesResponse = googleFirebaseAppcheckV1betaBatchUpdateServicesResponse;
        return this;
    }
    public Long statusCode;
    public FirebaseappcheckProjectsServicesBatchUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}