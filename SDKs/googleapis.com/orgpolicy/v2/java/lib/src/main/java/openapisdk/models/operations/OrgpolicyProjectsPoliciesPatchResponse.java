package openapisdk.models.operations;



public class OrgpolicyProjectsPoliciesPatchResponse {
    public String contentType;
    public OrgpolicyProjectsPoliciesPatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleCloudOrgpolicyV2Policy googleCloudOrgpolicyV2Policy;
    public OrgpolicyProjectsPoliciesPatchResponse withGoogleCloudOrgpolicyV2Policy(openapisdk.models.shared.GoogleCloudOrgpolicyV2Policy googleCloudOrgpolicyV2Policy) {
        this.googleCloudOrgpolicyV2Policy = googleCloudOrgpolicyV2Policy;
        return this;
    }
    public Long statusCode;
    public OrgpolicyProjectsPoliciesPatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}