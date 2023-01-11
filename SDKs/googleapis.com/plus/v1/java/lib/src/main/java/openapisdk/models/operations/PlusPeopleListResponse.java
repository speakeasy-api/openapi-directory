package openapisdk.models.operations;



public class PlusPeopleListResponse {
    public String contentType;
    public PlusPeopleListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PeopleFeed peopleFeed;
    public PlusPeopleListResponse withPeopleFeed(openapisdk.models.shared.PeopleFeed peopleFeed) {
        this.peopleFeed = peopleFeed;
        return this;
    }
    public Long statusCode;
    public PlusPeopleListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}