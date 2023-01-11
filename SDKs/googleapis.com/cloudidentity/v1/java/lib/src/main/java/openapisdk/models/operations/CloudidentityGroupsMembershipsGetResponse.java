package openapisdk.models.operations;



public class CloudidentityGroupsMembershipsGetResponse {
    public String contentType;
    public CloudidentityGroupsMembershipsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Membership membership;
    public CloudidentityGroupsMembershipsGetResponse withMembership(openapisdk.models.shared.Membership membership) {
        this.membership = membership;
        return this;
    }
    public Long statusCode;
    public CloudidentityGroupsMembershipsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}