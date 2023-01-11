package openapisdk.models.operations;



public class DisplayvideoCustomBiddingAlgorithmsScriptsListResponse {
    public String contentType;
    public DisplayvideoCustomBiddingAlgorithmsScriptsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListCustomBiddingScriptsResponse listCustomBiddingScriptsResponse;
    public DisplayvideoCustomBiddingAlgorithmsScriptsListResponse withListCustomBiddingScriptsResponse(openapisdk.models.shared.ListCustomBiddingScriptsResponse listCustomBiddingScriptsResponse) {
        this.listCustomBiddingScriptsResponse = listCustomBiddingScriptsResponse;
        return this;
    }
    public Long statusCode;
    public DisplayvideoCustomBiddingAlgorithmsScriptsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}