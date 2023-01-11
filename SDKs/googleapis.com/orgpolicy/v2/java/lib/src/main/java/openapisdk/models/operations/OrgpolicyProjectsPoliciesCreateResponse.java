package openapisdk.models.operations;



public class OrgpolicyProjectsPoliciesCreateResponse {
    public String contentType;
    public OrgpolicyProjectsPoliciesCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleCloudOrgpolicyV2Policy googleCloudOrgpolicyV2Policy;
    public OrgpolicyProjectsPoliciesCreateResponse withGoogleCloudOrgpolicyV2Policy(openapisdk.models.shared.GoogleCloudOrgpolicyV2Policy googleCloudOrgpolicyV2Policy) {
        this.googleCloudOrgpolicyV2Policy = googleCloudOrgpolicyV2Policy;
        return this;
    }
    public Long statusCode;
    public OrgpolicyProjectsPoliciesCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}