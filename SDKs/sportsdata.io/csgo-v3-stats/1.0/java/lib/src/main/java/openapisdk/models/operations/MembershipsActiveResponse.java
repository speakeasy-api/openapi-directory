package openapisdk.models.operations;



public class MembershipsActiveResponse {
    public String contentType;
    public MembershipsActiveResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object[] memberships;
    public MembershipsActiveResponse withMemberships(Object[] memberships) {
        this.memberships = memberships;
        return this;
    }
    public Long statusCode;
    public MembershipsActiveResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}