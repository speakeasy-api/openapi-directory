package openapisdk.models.operations;



public class OrgpolicyProjectsPoliciesListResponse {
    public String contentType;
    public OrgpolicyProjectsPoliciesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleCloudOrgpolicyV2ListPoliciesResponse googleCloudOrgpolicyV2ListPoliciesResponse;
    public OrgpolicyProjectsPoliciesListResponse withGoogleCloudOrgpolicyV2ListPoliciesResponse(openapisdk.models.shared.GoogleCloudOrgpolicyV2ListPoliciesResponse googleCloudOrgpolicyV2ListPoliciesResponse) {
        this.googleCloudOrgpolicyV2ListPoliciesResponse = googleCloudOrgpolicyV2ListPoliciesResponse;
        return this;
    }
    public Long statusCode;
    public OrgpolicyProjectsPoliciesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}