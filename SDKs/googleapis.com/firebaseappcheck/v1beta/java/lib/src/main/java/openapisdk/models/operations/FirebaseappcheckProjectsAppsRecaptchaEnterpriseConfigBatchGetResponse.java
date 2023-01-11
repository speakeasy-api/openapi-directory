package openapisdk.models.operations;



public class FirebaseappcheckProjectsAppsRecaptchaEnterpriseConfigBatchGetResponse {
    public String contentType;
    public FirebaseappcheckProjectsAppsRecaptchaEnterpriseConfigBatchGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleFirebaseAppcheckV1betaBatchGetRecaptchaEnterpriseConfigsResponse googleFirebaseAppcheckV1betaBatchGetRecaptchaEnterpriseConfigsResponse;
    public FirebaseappcheckProjectsAppsRecaptchaEnterpriseConfigBatchGetResponse withGoogleFirebaseAppcheckV1betaBatchGetRecaptchaEnterpriseConfigsResponse(openapisdk.models.shared.GoogleFirebaseAppcheckV1betaBatchGetRecaptchaEnterpriseConfigsResponse googleFirebaseAppcheckV1betaBatchGetRecaptchaEnterpriseConfigsResponse) {
        this.googleFirebaseAppcheckV1betaBatchGetRecaptchaEnterpriseConfigsResponse = googleFirebaseAppcheckV1betaBatchGetRecaptchaEnterpriseConfigsResponse;
        return this;
    }
    public Long statusCode;
    public FirebaseappcheckProjectsAppsRecaptchaEnterpriseConfigBatchGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}