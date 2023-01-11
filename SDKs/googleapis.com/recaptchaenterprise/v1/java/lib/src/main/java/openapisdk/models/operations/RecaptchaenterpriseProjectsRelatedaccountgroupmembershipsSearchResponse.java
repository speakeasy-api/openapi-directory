package openapisdk.models.operations;



public class RecaptchaenterpriseProjectsRelatedaccountgroupmembershipsSearchResponse {
    public String contentType;
    public RecaptchaenterpriseProjectsRelatedaccountgroupmembershipsSearchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleCloudRecaptchaenterpriseV1SearchRelatedAccountGroupMembershipsResponse googleCloudRecaptchaenterpriseV1SearchRelatedAccountGroupMembershipsResponse;
    public RecaptchaenterpriseProjectsRelatedaccountgroupmembershipsSearchResponse withGoogleCloudRecaptchaenterpriseV1SearchRelatedAccountGroupMembershipsResponse(openapisdk.models.shared.GoogleCloudRecaptchaenterpriseV1SearchRelatedAccountGroupMembershipsResponse googleCloudRecaptchaenterpriseV1SearchRelatedAccountGroupMembershipsResponse) {
        this.googleCloudRecaptchaenterpriseV1SearchRelatedAccountGroupMembershipsResponse = googleCloudRecaptchaenterpriseV1SearchRelatedAccountGroupMembershipsResponse;
        return this;
    }
    public Long statusCode;
    public RecaptchaenterpriseProjectsRelatedaccountgroupmembershipsSearchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}