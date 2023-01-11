package openapisdk.models.operations;



public class DisplayvideoCustomBiddingAlgorithmsListResponse {
    public String contentType;
    public DisplayvideoCustomBiddingAlgorithmsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListCustomBiddingAlgorithmsResponse listCustomBiddingAlgorithmsResponse;
    public DisplayvideoCustomBiddingAlgorithmsListResponse withListCustomBiddingAlgorithmsResponse(openapisdk.models.shared.ListCustomBiddingAlgorithmsResponse listCustomBiddingAlgorithmsResponse) {
        this.listCustomBiddingAlgorithmsResponse = listCustomBiddingAlgorithmsResponse;
        return this;
    }
    public Long statusCode;
    public DisplayvideoCustomBiddingAlgorithmsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}