package openapisdk.models.operations;



public class RealtimebiddingBiddersCreativesWatchResponse {
    public String contentType;
    public RealtimebiddingBiddersCreativesWatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public RealtimebiddingBiddersCreativesWatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.WatchCreativesResponse watchCreativesResponse;
    public RealtimebiddingBiddersCreativesWatchResponse withWatchCreativesResponse(openapisdk.models.shared.WatchCreativesResponse watchCreativesResponse) {
        this.watchCreativesResponse = watchCreativesResponse;
        return this;
    }
}