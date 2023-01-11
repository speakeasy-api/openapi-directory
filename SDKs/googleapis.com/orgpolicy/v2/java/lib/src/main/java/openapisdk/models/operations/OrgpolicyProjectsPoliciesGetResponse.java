package openapisdk.models.operations;



public class OrgpolicyProjectsPoliciesGetResponse {
    public String contentType;
    public OrgpolicyProjectsPoliciesGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleCloudOrgpolicyV2Policy googleCloudOrgpolicyV2Policy;
    public OrgpolicyProjectsPoliciesGetResponse withGoogleCloudOrgpolicyV2Policy(openapisdk.models.shared.GoogleCloudOrgpolicyV2Policy googleCloudOrgpolicyV2Policy) {
        this.googleCloudOrgpolicyV2Policy = googleCloudOrgpolicyV2Policy;
        return this;
    }
    public Long statusCode;
    public OrgpolicyProjectsPoliciesGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}