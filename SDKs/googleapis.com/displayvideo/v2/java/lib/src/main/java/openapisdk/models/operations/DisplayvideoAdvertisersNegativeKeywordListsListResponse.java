package openapisdk.models.operations;



public class DisplayvideoAdvertisersNegativeKeywordListsListResponse {
    public String contentType;
    public DisplayvideoAdvertisersNegativeKeywordListsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListNegativeKeywordListsResponse listNegativeKeywordListsResponse;
    public DisplayvideoAdvertisersNegativeKeywordListsListResponse withListNegativeKeywordListsResponse(openapisdk.models.shared.ListNegativeKeywordListsResponse listNegativeKeywordListsResponse) {
        this.listNegativeKeywordListsResponse = listNegativeKeywordListsResponse;
        return this;
    }
    public Long statusCode;
    public DisplayvideoAdvertisersNegativeKeywordListsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}