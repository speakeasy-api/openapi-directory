package openapisdk.models.operations;



public class OrgpolicyOrganizationsCustomConstraintsListResponse {
    public String contentType;
    public OrgpolicyOrganizationsCustomConstraintsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleCloudOrgpolicyV2ListCustomConstraintsResponse googleCloudOrgpolicyV2ListCustomConstraintsResponse;
    public OrgpolicyOrganizationsCustomConstraintsListResponse withGoogleCloudOrgpolicyV2ListCustomConstraintsResponse(openapisdk.models.shared.GoogleCloudOrgpolicyV2ListCustomConstraintsResponse googleCloudOrgpolicyV2ListCustomConstraintsResponse) {
        this.googleCloudOrgpolicyV2ListCustomConstraintsResponse = googleCloudOrgpolicyV2ListCustomConstraintsResponse;
        return this;
    }
    public Long statusCode;
    public OrgpolicyOrganizationsCustomConstraintsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}