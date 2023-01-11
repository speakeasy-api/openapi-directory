package openapisdk.models.operations;



public class DisplayvideoCustomBiddingAlgorithmsPatchResponse {
    public String contentType;
    public DisplayvideoCustomBiddingAlgorithmsPatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CustomBiddingAlgorithm customBiddingAlgorithm;
    public DisplayvideoCustomBiddingAlgorithmsPatchResponse withCustomBiddingAlgorithm(openapisdk.models.shared.CustomBiddingAlgorithm customBiddingAlgorithm) {
        this.customBiddingAlgorithm = customBiddingAlgorithm;
        return this;
    }
    public Long statusCode;
    public DisplayvideoCustomBiddingAlgorithmsPatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}