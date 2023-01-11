package openapisdk.models.operations;



public class RecaptchaenterpriseProjectsRelatedaccountgroupsListResponse {
    public String contentType;
    public RecaptchaenterpriseProjectsRelatedaccountgroupsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleCloudRecaptchaenterpriseV1ListRelatedAccountGroupsResponse googleCloudRecaptchaenterpriseV1ListRelatedAccountGroupsResponse;
    public RecaptchaenterpriseProjectsRelatedaccountgroupsListResponse withGoogleCloudRecaptchaenterpriseV1ListRelatedAccountGroupsResponse(openapisdk.models.shared.GoogleCloudRecaptchaenterpriseV1ListRelatedAccountGroupsResponse googleCloudRecaptchaenterpriseV1ListRelatedAccountGroupsResponse) {
        this.googleCloudRecaptchaenterpriseV1ListRelatedAccountGroupsResponse = googleCloudRecaptchaenterpriseV1ListRelatedAccountGroupsResponse;
        return this;
    }
    public Long statusCode;
    public RecaptchaenterpriseProjectsRelatedaccountgroupsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}