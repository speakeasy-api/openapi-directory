package openapisdk.models.operations;



public class MembershipsByTeamActiveResponse {
    public String contentType;
    public MembershipsByTeamActiveResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object[] memberships;
    public MembershipsByTeamActiveResponse withMemberships(Object[] memberships) {
        this.memberships = memberships;
        return this;
    }
    public Long statusCode;
    public MembershipsByTeamActiveResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}