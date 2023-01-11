package openapisdk.models.operations;



public class OrgpolicyOrganizationsCustomConstraintsCreateResponse {
    public String contentType;
    public OrgpolicyOrganizationsCustomConstraintsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleCloudOrgpolicyV2CustomConstraint googleCloudOrgpolicyV2CustomConstraint;
    public OrgpolicyOrganizationsCustomConstraintsCreateResponse withGoogleCloudOrgpolicyV2CustomConstraint(openapisdk.models.shared.GoogleCloudOrgpolicyV2CustomConstraint googleCloudOrgpolicyV2CustomConstraint) {
        this.googleCloudOrgpolicyV2CustomConstraint = googleCloudOrgpolicyV2CustomConstraint;
        return this;
    }
    public Long statusCode;
    public OrgpolicyOrganizationsCustomConstraintsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}