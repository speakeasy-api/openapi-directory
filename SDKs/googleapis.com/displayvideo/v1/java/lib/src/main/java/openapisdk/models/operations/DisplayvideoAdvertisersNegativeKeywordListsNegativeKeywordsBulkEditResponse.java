package openapisdk.models.operations;



public class DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsBulkEditResponse {
    public openapisdk.models.shared.BulkEditNegativeKeywordsResponse bulkEditNegativeKeywordsResponse;
    public DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsBulkEditResponse withBulkEditNegativeKeywordsResponse(openapisdk.models.shared.BulkEditNegativeKeywordsResponse bulkEditNegativeKeywordsResponse) {
        this.bulkEditNegativeKeywordsResponse = bulkEditNegativeKeywordsResponse;
        return this;
    }
    public String contentType;
    public DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsBulkEditResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsBulkEditResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}