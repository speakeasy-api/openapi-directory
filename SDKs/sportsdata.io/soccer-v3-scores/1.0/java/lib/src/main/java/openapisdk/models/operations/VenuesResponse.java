package openapisdk.models.operations;



public class VenuesResponse {
    public String contentType;
    public VenuesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public VenuesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object[] venues;
    public VenuesResponse withVenues(Object[] venues) {
        this.venues = venues;
        return this;
    }
}