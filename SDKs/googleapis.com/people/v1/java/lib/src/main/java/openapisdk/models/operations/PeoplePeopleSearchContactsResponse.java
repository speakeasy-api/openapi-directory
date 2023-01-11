package openapisdk.models.operations;



public class PeoplePeopleSearchContactsResponse {
    public String contentType;
    public PeoplePeopleSearchContactsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SearchResponse searchResponse;
    public PeoplePeopleSearchContactsResponse withSearchResponse(openapisdk.models.shared.SearchResponse searchResponse) {
        this.searchResponse = searchResponse;
        return this;
    }
    public Long statusCode;
    public PeoplePeopleSearchContactsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}