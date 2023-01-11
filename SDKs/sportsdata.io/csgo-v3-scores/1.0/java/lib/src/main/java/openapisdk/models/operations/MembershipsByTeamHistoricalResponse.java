package openapisdk.models.operations;



public class MembershipsByTeamHistoricalResponse {
    public String contentType;
    public MembershipsByTeamHistoricalResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object[] memberships;
    public MembershipsByTeamHistoricalResponse withMemberships(Object[] memberships) {
        this.memberships = memberships;
        return this;
    }
    public Long statusCode;
    public MembershipsByTeamHistoricalResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}