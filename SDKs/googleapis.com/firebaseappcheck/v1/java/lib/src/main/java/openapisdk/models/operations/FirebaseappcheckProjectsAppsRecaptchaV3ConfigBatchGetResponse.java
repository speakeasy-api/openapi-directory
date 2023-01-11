package openapisdk.models.operations;



public class FirebaseappcheckProjectsAppsRecaptchaV3ConfigBatchGetResponse {
    public String contentType;
    public FirebaseappcheckProjectsAppsRecaptchaV3ConfigBatchGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleFirebaseAppcheckV1BatchGetRecaptchaV3ConfigsResponse googleFirebaseAppcheckV1BatchGetRecaptchaV3ConfigsResponse;
    public FirebaseappcheckProjectsAppsRecaptchaV3ConfigBatchGetResponse withGoogleFirebaseAppcheckV1BatchGetRecaptchaV3ConfigsResponse(openapisdk.models.shared.GoogleFirebaseAppcheckV1BatchGetRecaptchaV3ConfigsResponse googleFirebaseAppcheckV1BatchGetRecaptchaV3ConfigsResponse) {
        this.googleFirebaseAppcheckV1BatchGetRecaptchaV3ConfigsResponse = googleFirebaseAppcheckV1BatchGetRecaptchaV3ConfigsResponse;
        return this;
    }
    public Long statusCode;
    public FirebaseappcheckProjectsAppsRecaptchaV3ConfigBatchGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}