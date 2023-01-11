package openapisdk.models.operations;



public class OrgpolicyProjectsConstraintsListResponse {
    public String contentType;
    public OrgpolicyProjectsConstraintsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleCloudOrgpolicyV2ListConstraintsResponse googleCloudOrgpolicyV2ListConstraintsResponse;
    public OrgpolicyProjectsConstraintsListResponse withGoogleCloudOrgpolicyV2ListConstraintsResponse(openapisdk.models.shared.GoogleCloudOrgpolicyV2ListConstraintsResponse googleCloudOrgpolicyV2ListConstraintsResponse) {
        this.googleCloudOrgpolicyV2ListConstraintsResponse = googleCloudOrgpolicyV2ListConstraintsResponse;
        return this;
    }
    public Long statusCode;
    public OrgpolicyProjectsConstraintsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}