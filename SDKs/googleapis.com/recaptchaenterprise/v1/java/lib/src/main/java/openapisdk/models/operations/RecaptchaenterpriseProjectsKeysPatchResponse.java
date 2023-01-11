package openapisdk.models.operations;



public class RecaptchaenterpriseProjectsKeysPatchResponse {
    public String contentType;
    public RecaptchaenterpriseProjectsKeysPatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleCloudRecaptchaenterpriseV1Key googleCloudRecaptchaenterpriseV1Key;
    public RecaptchaenterpriseProjectsKeysPatchResponse withGoogleCloudRecaptchaenterpriseV1Key(openapisdk.models.shared.GoogleCloudRecaptchaenterpriseV1Key googleCloudRecaptchaenterpriseV1Key) {
        this.googleCloudRecaptchaenterpriseV1Key = googleCloudRecaptchaenterpriseV1Key;
        return this;
    }
    public Long statusCode;
    public RecaptchaenterpriseProjectsKeysPatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}