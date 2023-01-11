package openapisdk.models.operations;



public class FirebaseappcheckProjectsAppsPlayIntegrityConfigBatchGetResponse {
    public String contentType;
    public FirebaseappcheckProjectsAppsPlayIntegrityConfigBatchGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleFirebaseAppcheckV1BatchGetPlayIntegrityConfigsResponse googleFirebaseAppcheckV1BatchGetPlayIntegrityConfigsResponse;
    public FirebaseappcheckProjectsAppsPlayIntegrityConfigBatchGetResponse withGoogleFirebaseAppcheckV1BatchGetPlayIntegrityConfigsResponse(openapisdk.models.shared.GoogleFirebaseAppcheckV1BatchGetPlayIntegrityConfigsResponse googleFirebaseAppcheckV1BatchGetPlayIntegrityConfigsResponse) {
        this.googleFirebaseAppcheckV1BatchGetPlayIntegrityConfigsResponse = googleFirebaseAppcheckV1BatchGetPlayIntegrityConfigsResponse;
        return this;
    }
    public Long statusCode;
    public FirebaseappcheckProjectsAppsPlayIntegrityConfigBatchGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}