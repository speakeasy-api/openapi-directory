package openapisdk.models.operations;



public class RecaptchaenterpriseProjectsAssessmentsCreateResponse {
    public String contentType;
    public RecaptchaenterpriseProjectsAssessmentsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleCloudRecaptchaenterpriseV1Assessment googleCloudRecaptchaenterpriseV1Assessment;
    public RecaptchaenterpriseProjectsAssessmentsCreateResponse withGoogleCloudRecaptchaenterpriseV1Assessment(openapisdk.models.shared.GoogleCloudRecaptchaenterpriseV1Assessment googleCloudRecaptchaenterpriseV1Assessment) {
        this.googleCloudRecaptchaenterpriseV1Assessment = googleCloudRecaptchaenterpriseV1Assessment;
        return this;
    }
    public Long statusCode;
    public RecaptchaenterpriseProjectsAssessmentsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}