package openapisdk.models.operations;



public class FirebaseappcheckProjectsAppsRecaptchaEnterpriseConfigBatchGetResponse {
    public String contentType;
    public FirebaseappcheckProjectsAppsRecaptchaEnterpriseConfigBatchGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleFirebaseAppcheckV1BatchGetRecaptchaEnterpriseConfigsResponse googleFirebaseAppcheckV1BatchGetRecaptchaEnterpriseConfigsResponse;
    public FirebaseappcheckProjectsAppsRecaptchaEnterpriseConfigBatchGetResponse withGoogleFirebaseAppcheckV1BatchGetRecaptchaEnterpriseConfigsResponse(openapisdk.models.shared.GoogleFirebaseAppcheckV1BatchGetRecaptchaEnterpriseConfigsResponse googleFirebaseAppcheckV1BatchGetRecaptchaEnterpriseConfigsResponse) {
        this.googleFirebaseAppcheckV1BatchGetRecaptchaEnterpriseConfigsResponse = googleFirebaseAppcheckV1BatchGetRecaptchaEnterpriseConfigsResponse;
        return this;
    }
    public Long statusCode;
    public FirebaseappcheckProjectsAppsRecaptchaEnterpriseConfigBatchGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}