package openapisdk.models.operations;



public class DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsListResponse {
    public String contentType;
    public DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListNegativeKeywordsResponse listNegativeKeywordsResponse;
    public DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsListResponse withListNegativeKeywordsResponse(openapisdk.models.shared.ListNegativeKeywordsResponse listNegativeKeywordsResponse) {
        this.listNegativeKeywordsResponse = listNegativeKeywordsResponse;
        return this;
    }
    public Long statusCode;
    public DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}