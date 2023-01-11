package openapisdk.models.operations;



public class PlusPeopleSearchResponse {
    public String contentType;
    public PlusPeopleSearchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PeopleFeed peopleFeed;
    public PlusPeopleSearchResponse withPeopleFeed(openapisdk.models.shared.PeopleFeed peopleFeed) {
        this.peopleFeed = peopleFeed;
        return this;
    }
    public Long statusCode;
    public PlusPeopleSearchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}