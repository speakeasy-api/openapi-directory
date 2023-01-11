package openapisdk.models.operations;



public class FirebaseappcheckProjectsAppsDeviceCheckConfigBatchGetResponse {
    public String contentType;
    public FirebaseappcheckProjectsAppsDeviceCheckConfigBatchGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleFirebaseAppcheckV1BatchGetDeviceCheckConfigsResponse googleFirebaseAppcheckV1BatchGetDeviceCheckConfigsResponse;
    public FirebaseappcheckProjectsAppsDeviceCheckConfigBatchGetResponse withGoogleFirebaseAppcheckV1BatchGetDeviceCheckConfigsResponse(openapisdk.models.shared.GoogleFirebaseAppcheckV1BatchGetDeviceCheckConfigsResponse googleFirebaseAppcheckV1BatchGetDeviceCheckConfigsResponse) {
        this.googleFirebaseAppcheckV1BatchGetDeviceCheckConfigsResponse = googleFirebaseAppcheckV1BatchGetDeviceCheckConfigsResponse;
        return this;
    }
    public Long statusCode;
    public FirebaseappcheckProjectsAppsDeviceCheckConfigBatchGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}