package openapisdk.models.operations;



public class CloudidentityGroupsMembershipsLookupResponse {
    public String contentType;
    public CloudidentityGroupsMembershipsLookupResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.LookupMembershipNameResponse lookupMembershipNameResponse;
    public CloudidentityGroupsMembershipsLookupResponse withLookupMembershipNameResponse(openapisdk.models.shared.LookupMembershipNameResponse lookupMembershipNameResponse) {
        this.lookupMembershipNameResponse = lookupMembershipNameResponse;
        return this;
    }
    public Long statusCode;
    public CloudidentityGroupsMembershipsLookupResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}