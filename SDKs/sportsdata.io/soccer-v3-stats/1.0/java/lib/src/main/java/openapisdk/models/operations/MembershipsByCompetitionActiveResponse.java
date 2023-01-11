package openapisdk.models.operations;



public class MembershipsByCompetitionActiveResponse {
    public String contentType;
    public MembershipsByCompetitionActiveResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object[] memberships;
    public MembershipsByCompetitionActiveResponse withMemberships(Object[] memberships) {
        this.memberships = memberships;
        return this;
    }
    public Long statusCode;
    public MembershipsByCompetitionActiveResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}