package openapisdk.models.operations;



public class FirebaseappcheckProjectsAppsRecaptchaV3ConfigBatchGetResponse {
    public String contentType;
    public FirebaseappcheckProjectsAppsRecaptchaV3ConfigBatchGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleFirebaseAppcheckV1betaBatchGetRecaptchaV3ConfigsResponse googleFirebaseAppcheckV1betaBatchGetRecaptchaV3ConfigsResponse;
    public FirebaseappcheckProjectsAppsRecaptchaV3ConfigBatchGetResponse withGoogleFirebaseAppcheckV1betaBatchGetRecaptchaV3ConfigsResponse(openapisdk.models.shared.GoogleFirebaseAppcheckV1betaBatchGetRecaptchaV3ConfigsResponse googleFirebaseAppcheckV1betaBatchGetRecaptchaV3ConfigsResponse) {
        this.googleFirebaseAppcheckV1betaBatchGetRecaptchaV3ConfigsResponse = googleFirebaseAppcheckV1betaBatchGetRecaptchaV3ConfigsResponse;
        return this;
    }
    public Long statusCode;
    public FirebaseappcheckProjectsAppsRecaptchaV3ConfigBatchGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}