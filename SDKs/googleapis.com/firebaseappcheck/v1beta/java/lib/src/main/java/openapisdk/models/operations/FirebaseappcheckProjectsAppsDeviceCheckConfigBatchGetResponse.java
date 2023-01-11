package openapisdk.models.operations;



public class FirebaseappcheckProjectsAppsDeviceCheckConfigBatchGetResponse {
    public String contentType;
    public FirebaseappcheckProjectsAppsDeviceCheckConfigBatchGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleFirebaseAppcheckV1betaBatchGetDeviceCheckConfigsResponse googleFirebaseAppcheckV1betaBatchGetDeviceCheckConfigsResponse;
    public FirebaseappcheckProjectsAppsDeviceCheckConfigBatchGetResponse withGoogleFirebaseAppcheckV1betaBatchGetDeviceCheckConfigsResponse(openapisdk.models.shared.GoogleFirebaseAppcheckV1betaBatchGetDeviceCheckConfigsResponse googleFirebaseAppcheckV1betaBatchGetDeviceCheckConfigsResponse) {
        this.googleFirebaseAppcheckV1betaBatchGetDeviceCheckConfigsResponse = googleFirebaseAppcheckV1betaBatchGetDeviceCheckConfigsResponse;
        return this;
    }
    public Long statusCode;
    public FirebaseappcheckProjectsAppsDeviceCheckConfigBatchGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}