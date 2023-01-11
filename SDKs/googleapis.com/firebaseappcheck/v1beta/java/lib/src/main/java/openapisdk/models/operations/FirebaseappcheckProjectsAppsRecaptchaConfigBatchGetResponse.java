package openapisdk.models.operations;



public class FirebaseappcheckProjectsAppsRecaptchaConfigBatchGetResponse {
    public String contentType;
    public FirebaseappcheckProjectsAppsRecaptchaConfigBatchGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleFirebaseAppcheckV1betaBatchGetRecaptchaConfigsResponse googleFirebaseAppcheckV1betaBatchGetRecaptchaConfigsResponse;
    public FirebaseappcheckProjectsAppsRecaptchaConfigBatchGetResponse withGoogleFirebaseAppcheckV1betaBatchGetRecaptchaConfigsResponse(openapisdk.models.shared.GoogleFirebaseAppcheckV1betaBatchGetRecaptchaConfigsResponse googleFirebaseAppcheckV1betaBatchGetRecaptchaConfigsResponse) {
        this.googleFirebaseAppcheckV1betaBatchGetRecaptchaConfigsResponse = googleFirebaseAppcheckV1betaBatchGetRecaptchaConfigsResponse;
        return this;
    }
    public Long statusCode;
    public FirebaseappcheckProjectsAppsRecaptchaConfigBatchGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}