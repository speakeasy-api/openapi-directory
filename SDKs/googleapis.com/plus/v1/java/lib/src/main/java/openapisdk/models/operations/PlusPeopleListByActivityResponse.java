package openapisdk.models.operations;



public class PlusPeopleListByActivityResponse {
    public String contentType;
    public PlusPeopleListByActivityResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PeopleFeed peopleFeed;
    public PlusPeopleListByActivityResponse withPeopleFeed(openapisdk.models.shared.PeopleFeed peopleFeed) {
        this.peopleFeed = peopleFeed;
        return this;
    }
    public Long statusCode;
    public PlusPeopleListByActivityResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}