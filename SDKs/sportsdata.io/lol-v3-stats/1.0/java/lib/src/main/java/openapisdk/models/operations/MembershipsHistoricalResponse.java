package openapisdk.models.operations;



public class MembershipsHistoricalResponse {
    public String contentType;
    public MembershipsHistoricalResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object[] memberships;
    public MembershipsHistoricalResponse withMemberships(Object[] memberships) {
        this.memberships = memberships;
        return this;
    }
    public Long statusCode;
    public MembershipsHistoricalResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}