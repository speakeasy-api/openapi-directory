package openapisdk.models.operations;



public class RecaptchaenterpriseProjectsKeysMigrateResponse {
    public String contentType;
    public RecaptchaenterpriseProjectsKeysMigrateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleCloudRecaptchaenterpriseV1Key googleCloudRecaptchaenterpriseV1Key;
    public RecaptchaenterpriseProjectsKeysMigrateResponse withGoogleCloudRecaptchaenterpriseV1Key(openapisdk.models.shared.GoogleCloudRecaptchaenterpriseV1Key googleCloudRecaptchaenterpriseV1Key) {
        this.googleCloudRecaptchaenterpriseV1Key = googleCloudRecaptchaenterpriseV1Key;
        return this;
    }
    public Long statusCode;
    public RecaptchaenterpriseProjectsKeysMigrateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}