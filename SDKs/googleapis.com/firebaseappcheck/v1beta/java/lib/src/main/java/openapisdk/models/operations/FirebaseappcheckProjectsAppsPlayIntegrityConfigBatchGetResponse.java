package openapisdk.models.operations;



public class FirebaseappcheckProjectsAppsPlayIntegrityConfigBatchGetResponse {
    public String contentType;
    public FirebaseappcheckProjectsAppsPlayIntegrityConfigBatchGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleFirebaseAppcheckV1betaBatchGetPlayIntegrityConfigsResponse googleFirebaseAppcheckV1betaBatchGetPlayIntegrityConfigsResponse;
    public FirebaseappcheckProjectsAppsPlayIntegrityConfigBatchGetResponse withGoogleFirebaseAppcheckV1betaBatchGetPlayIntegrityConfigsResponse(openapisdk.models.shared.GoogleFirebaseAppcheckV1betaBatchGetPlayIntegrityConfigsResponse googleFirebaseAppcheckV1betaBatchGetPlayIntegrityConfigsResponse) {
        this.googleFirebaseAppcheckV1betaBatchGetPlayIntegrityConfigsResponse = googleFirebaseAppcheckV1betaBatchGetPlayIntegrityConfigsResponse;
        return this;
    }
    public Long statusCode;
    public FirebaseappcheckProjectsAppsPlayIntegrityConfigBatchGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}