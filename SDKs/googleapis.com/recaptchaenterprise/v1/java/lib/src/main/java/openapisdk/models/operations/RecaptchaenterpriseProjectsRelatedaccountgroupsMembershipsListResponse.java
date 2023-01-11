package openapisdk.models.operations;



public class RecaptchaenterpriseProjectsRelatedaccountgroupsMembershipsListResponse {
    public String contentType;
    public RecaptchaenterpriseProjectsRelatedaccountgroupsMembershipsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleCloudRecaptchaenterpriseV1ListRelatedAccountGroupMembershipsResponse googleCloudRecaptchaenterpriseV1ListRelatedAccountGroupMembershipsResponse;
    public RecaptchaenterpriseProjectsRelatedaccountgroupsMembershipsListResponse withGoogleCloudRecaptchaenterpriseV1ListRelatedAccountGroupMembershipsResponse(openapisdk.models.shared.GoogleCloudRecaptchaenterpriseV1ListRelatedAccountGroupMembershipsResponse googleCloudRecaptchaenterpriseV1ListRelatedAccountGroupMembershipsResponse) {
        this.googleCloudRecaptchaenterpriseV1ListRelatedAccountGroupMembershipsResponse = googleCloudRecaptchaenterpriseV1ListRelatedAccountGroupMembershipsResponse;
        return this;
    }
    public Long statusCode;
    public RecaptchaenterpriseProjectsRelatedaccountgroupsMembershipsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}