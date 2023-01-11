package openapisdk.models.operations;



public class DisplayvideoAdvertisersNegativeKeywordListsPatchResponse {
    public String contentType;
    public DisplayvideoAdvertisersNegativeKeywordListsPatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.NegativeKeywordList negativeKeywordList;
    public DisplayvideoAdvertisersNegativeKeywordListsPatchResponse withNegativeKeywordList(openapisdk.models.shared.NegativeKeywordList negativeKeywordList) {
        this.negativeKeywordList = negativeKeywordList;
        return this;
    }
    public Long statusCode;
    public DisplayvideoAdvertisersNegativeKeywordListsPatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}