package openapisdk.models.operations;



public class MembershipsRecentlyChangedResponse {
    public String contentType;
    public MembershipsRecentlyChangedResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object[] memberships;
    public MembershipsRecentlyChangedResponse withMemberships(Object[] memberships) {
        this.memberships = memberships;
        return this;
    }
    public Long statusCode;
    public MembershipsRecentlyChangedResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}