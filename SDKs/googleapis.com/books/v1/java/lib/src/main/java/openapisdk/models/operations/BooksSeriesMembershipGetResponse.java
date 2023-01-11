package openapisdk.models.operations;



public class BooksSeriesMembershipGetResponse {
    public String contentType;
    public BooksSeriesMembershipGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Seriesmembership seriesmembership;
    public BooksSeriesMembershipGetResponse withSeriesmembership(openapisdk.models.shared.Seriesmembership seriesmembership) {
        this.seriesmembership = seriesmembership;
        return this;
    }
    public Long statusCode;
    public BooksSeriesMembershipGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}