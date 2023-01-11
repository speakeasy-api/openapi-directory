package openapisdk.models.operations;



public class FirebaseappcheckProjectsAppsAppAttestConfigBatchGetResponse {
    public String contentType;
    public FirebaseappcheckProjectsAppsAppAttestConfigBatchGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleFirebaseAppcheckV1betaBatchGetAppAttestConfigsResponse googleFirebaseAppcheckV1betaBatchGetAppAttestConfigsResponse;
    public FirebaseappcheckProjectsAppsAppAttestConfigBatchGetResponse withGoogleFirebaseAppcheckV1betaBatchGetAppAttestConfigsResponse(openapisdk.models.shared.GoogleFirebaseAppcheckV1betaBatchGetAppAttestConfigsResponse googleFirebaseAppcheckV1betaBatchGetAppAttestConfigsResponse) {
        this.googleFirebaseAppcheckV1betaBatchGetAppAttestConfigsResponse = googleFirebaseAppcheckV1betaBatchGetAppAttestConfigsResponse;
        return this;
    }
    public Long statusCode;
    public FirebaseappcheckProjectsAppsAppAttestConfigBatchGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}