package openapisdk.models.operations;



public class YoutubeSearchListResponse {
    public String contentType;
    public YoutubeSearchListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SearchListResponse searchListResponse;
    public YoutubeSearchListResponse withSearchListResponse(openapisdk.models.shared.SearchListResponse searchListResponse) {
        this.searchListResponse = searchListResponse;
        return this;
    }
    public Long statusCode;
    public YoutubeSearchListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}