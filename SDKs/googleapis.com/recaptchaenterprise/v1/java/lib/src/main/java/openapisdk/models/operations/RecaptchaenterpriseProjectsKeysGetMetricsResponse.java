package openapisdk.models.operations;



public class RecaptchaenterpriseProjectsKeysGetMetricsResponse {
    public String contentType;
    public RecaptchaenterpriseProjectsKeysGetMetricsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleCloudRecaptchaenterpriseV1Metrics googleCloudRecaptchaenterpriseV1Metrics;
    public RecaptchaenterpriseProjectsKeysGetMetricsResponse withGoogleCloudRecaptchaenterpriseV1Metrics(openapisdk.models.shared.GoogleCloudRecaptchaenterpriseV1Metrics googleCloudRecaptchaenterpriseV1Metrics) {
        this.googleCloudRecaptchaenterpriseV1Metrics = googleCloudRecaptchaenterpriseV1Metrics;
        return this;
    }
    public Long statusCode;
    public RecaptchaenterpriseProjectsKeysGetMetricsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}