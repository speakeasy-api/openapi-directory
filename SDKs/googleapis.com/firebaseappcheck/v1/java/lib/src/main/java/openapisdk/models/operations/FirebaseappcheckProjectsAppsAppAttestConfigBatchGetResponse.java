package openapisdk.models.operations;



public class FirebaseappcheckProjectsAppsAppAttestConfigBatchGetResponse {
    public String contentType;
    public FirebaseappcheckProjectsAppsAppAttestConfigBatchGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleFirebaseAppcheckV1BatchGetAppAttestConfigsResponse googleFirebaseAppcheckV1BatchGetAppAttestConfigsResponse;
    public FirebaseappcheckProjectsAppsAppAttestConfigBatchGetResponse withGoogleFirebaseAppcheckV1BatchGetAppAttestConfigsResponse(openapisdk.models.shared.GoogleFirebaseAppcheckV1BatchGetAppAttestConfigsResponse googleFirebaseAppcheckV1BatchGetAppAttestConfigsResponse) {
        this.googleFirebaseAppcheckV1BatchGetAppAttestConfigsResponse = googleFirebaseAppcheckV1BatchGetAppAttestConfigsResponse;
        return this;
    }
    public Long statusCode;
    public FirebaseappcheckProjectsAppsAppAttestConfigBatchGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}