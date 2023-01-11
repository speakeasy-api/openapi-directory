package openapisdk.models.operations;



public class CloudidentityGroupsMembershipsCheckTransitiveMembershipResponse {
    public openapisdk.models.shared.CheckTransitiveMembershipResponse checkTransitiveMembershipResponse;
    public CloudidentityGroupsMembershipsCheckTransitiveMembershipResponse withCheckTransitiveMembershipResponse(openapisdk.models.shared.CheckTransitiveMembershipResponse checkTransitiveMembershipResponse) {
        this.checkTransitiveMembershipResponse = checkTransitiveMembershipResponse;
        return this;
    }
    public String contentType;
    public CloudidentityGroupsMembershipsCheckTransitiveMembershipResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CloudidentityGroupsMembershipsCheckTransitiveMembershipResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}