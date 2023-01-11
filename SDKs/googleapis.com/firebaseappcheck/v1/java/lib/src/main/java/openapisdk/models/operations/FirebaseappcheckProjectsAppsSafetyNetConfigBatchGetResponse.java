package openapisdk.models.operations;



public class FirebaseappcheckProjectsAppsSafetyNetConfigBatchGetResponse {
    public String contentType;
    public FirebaseappcheckProjectsAppsSafetyNetConfigBatchGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleFirebaseAppcheckV1BatchGetSafetyNetConfigsResponse googleFirebaseAppcheckV1BatchGetSafetyNetConfigsResponse;
    public FirebaseappcheckProjectsAppsSafetyNetConfigBatchGetResponse withGoogleFirebaseAppcheckV1BatchGetSafetyNetConfigsResponse(openapisdk.models.shared.GoogleFirebaseAppcheckV1BatchGetSafetyNetConfigsResponse googleFirebaseAppcheckV1BatchGetSafetyNetConfigsResponse) {
        this.googleFirebaseAppcheckV1BatchGetSafetyNetConfigsResponse = googleFirebaseAppcheckV1BatchGetSafetyNetConfigsResponse;
        return this;
    }
    public Long statusCode;
    public FirebaseappcheckProjectsAppsSafetyNetConfigBatchGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}