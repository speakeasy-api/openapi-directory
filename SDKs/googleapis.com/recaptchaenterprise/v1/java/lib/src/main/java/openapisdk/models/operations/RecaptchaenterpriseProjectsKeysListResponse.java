package openapisdk.models.operations;



public class RecaptchaenterpriseProjectsKeysListResponse {
    public String contentType;
    public RecaptchaenterpriseProjectsKeysListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleCloudRecaptchaenterpriseV1ListKeysResponse googleCloudRecaptchaenterpriseV1ListKeysResponse;
    public RecaptchaenterpriseProjectsKeysListResponse withGoogleCloudRecaptchaenterpriseV1ListKeysResponse(openapisdk.models.shared.GoogleCloudRecaptchaenterpriseV1ListKeysResponse googleCloudRecaptchaenterpriseV1ListKeysResponse) {
        this.googleCloudRecaptchaenterpriseV1ListKeysResponse = googleCloudRecaptchaenterpriseV1ListKeysResponse;
        return this;
    }
    public Long statusCode;
    public RecaptchaenterpriseProjectsKeysListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}