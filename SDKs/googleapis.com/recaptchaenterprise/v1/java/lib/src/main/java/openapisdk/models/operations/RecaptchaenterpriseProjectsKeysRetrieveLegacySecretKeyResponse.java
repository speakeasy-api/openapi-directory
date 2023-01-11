package openapisdk.models.operations;



public class RecaptchaenterpriseProjectsKeysRetrieveLegacySecretKeyResponse {
    public String contentType;
    public RecaptchaenterpriseProjectsKeysRetrieveLegacySecretKeyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleCloudRecaptchaenterpriseV1RetrieveLegacySecretKeyResponse googleCloudRecaptchaenterpriseV1RetrieveLegacySecretKeyResponse;
    public RecaptchaenterpriseProjectsKeysRetrieveLegacySecretKeyResponse withGoogleCloudRecaptchaenterpriseV1RetrieveLegacySecretKeyResponse(openapisdk.models.shared.GoogleCloudRecaptchaenterpriseV1RetrieveLegacySecretKeyResponse googleCloudRecaptchaenterpriseV1RetrieveLegacySecretKeyResponse) {
        this.googleCloudRecaptchaenterpriseV1RetrieveLegacySecretKeyResponse = googleCloudRecaptchaenterpriseV1RetrieveLegacySecretKeyResponse;
        return this;
    }
    public Long statusCode;
    public RecaptchaenterpriseProjectsKeysRetrieveLegacySecretKeyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}