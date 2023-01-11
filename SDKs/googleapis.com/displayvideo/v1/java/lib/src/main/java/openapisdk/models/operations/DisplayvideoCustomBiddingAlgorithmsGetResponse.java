package openapisdk.models.operations;



public class DisplayvideoCustomBiddingAlgorithmsGetResponse {
    public String contentType;
    public DisplayvideoCustomBiddingAlgorithmsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CustomBiddingAlgorithm customBiddingAlgorithm;
    public DisplayvideoCustomBiddingAlgorithmsGetResponse withCustomBiddingAlgorithm(openapisdk.models.shared.CustomBiddingAlgorithm customBiddingAlgorithm) {
        this.customBiddingAlgorithm = customBiddingAlgorithm;
        return this;
    }
    public Long statusCode;
    public DisplayvideoCustomBiddingAlgorithmsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}