package openapisdk.models.operations;



public class OrgpolicyProjectsPoliciesGetEffectivePolicyResponse {
    public String contentType;
    public OrgpolicyProjectsPoliciesGetEffectivePolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleCloudOrgpolicyV2Policy googleCloudOrgpolicyV2Policy;
    public OrgpolicyProjectsPoliciesGetEffectivePolicyResponse withGoogleCloudOrgpolicyV2Policy(openapisdk.models.shared.GoogleCloudOrgpolicyV2Policy googleCloudOrgpolicyV2Policy) {
        this.googleCloudOrgpolicyV2Policy = googleCloudOrgpolicyV2Policy;
        return this;
    }
    public Long statusCode;
    public OrgpolicyProjectsPoliciesGetEffectivePolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}