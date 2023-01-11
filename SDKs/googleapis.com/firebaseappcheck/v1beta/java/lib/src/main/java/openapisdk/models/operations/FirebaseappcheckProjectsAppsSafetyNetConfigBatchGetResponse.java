package openapisdk.models.operations;



public class FirebaseappcheckProjectsAppsSafetyNetConfigBatchGetResponse {
    public String contentType;
    public FirebaseappcheckProjectsAppsSafetyNetConfigBatchGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleFirebaseAppcheckV1betaBatchGetSafetyNetConfigsResponse googleFirebaseAppcheckV1betaBatchGetSafetyNetConfigsResponse;
    public FirebaseappcheckProjectsAppsSafetyNetConfigBatchGetResponse withGoogleFirebaseAppcheckV1betaBatchGetSafetyNetConfigsResponse(openapisdk.models.shared.GoogleFirebaseAppcheckV1betaBatchGetSafetyNetConfigsResponse googleFirebaseAppcheckV1betaBatchGetSafetyNetConfigsResponse) {
        this.googleFirebaseAppcheckV1betaBatchGetSafetyNetConfigsResponse = googleFirebaseAppcheckV1betaBatchGetSafetyNetConfigsResponse;
        return this;
    }
    public Long statusCode;
    public FirebaseappcheckProjectsAppsSafetyNetConfigBatchGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}