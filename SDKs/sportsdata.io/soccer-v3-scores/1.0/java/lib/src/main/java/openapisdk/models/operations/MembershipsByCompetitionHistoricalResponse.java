package openapisdk.models.operations;



public class MembershipsByCompetitionHistoricalResponse {
    public String contentType;
    public MembershipsByCompetitionHistoricalResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object[] memberships;
    public MembershipsByCompetitionHistoricalResponse withMemberships(Object[] memberships) {
        this.memberships = memberships;
        return this;
    }
    public Long statusCode;
    public MembershipsByCompetitionHistoricalResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}