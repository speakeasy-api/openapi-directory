package openapisdk.models.operations;



public class CanceledMembershipsResponse {
    public Object canceledMembership;
    public CanceledMembershipsResponse withCanceledMembership(Object canceledMembership) {
        this.canceledMembership = canceledMembership;
        return this;
    }
    public String contentType;
    public CanceledMembershipsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CanceledMembershipsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}