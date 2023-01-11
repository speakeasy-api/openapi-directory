package openapisdk.models.operations;



public class RecaptchaenterpriseProjectsKeysCreateResponse {
    public String contentType;
    public RecaptchaenterpriseProjectsKeysCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleCloudRecaptchaenterpriseV1Key googleCloudRecaptchaenterpriseV1Key;
    public RecaptchaenterpriseProjectsKeysCreateResponse withGoogleCloudRecaptchaenterpriseV1Key(openapisdk.models.shared.GoogleCloudRecaptchaenterpriseV1Key googleCloudRecaptchaenterpriseV1Key) {
        this.googleCloudRecaptchaenterpriseV1Key = googleCloudRecaptchaenterpriseV1Key;
        return this;
    }
    public Long statusCode;
    public RecaptchaenterpriseProjectsKeysCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}