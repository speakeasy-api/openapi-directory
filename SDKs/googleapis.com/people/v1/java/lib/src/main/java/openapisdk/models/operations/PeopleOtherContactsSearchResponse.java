package openapisdk.models.operations;



public class PeopleOtherContactsSearchResponse {
    public String contentType;
    public PeopleOtherContactsSearchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SearchResponse searchResponse;
    public PeopleOtherContactsSearchResponse withSearchResponse(openapisdk.models.shared.SearchResponse searchResponse) {
        this.searchResponse = searchResponse;
        return this;
    }
    public Long statusCode;
    public PeopleOtherContactsSearchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}