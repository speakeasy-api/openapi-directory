package openapisdk.models.operations;



public class DisplayvideoCustomBiddingAlgorithmsScriptsGetResponse {
    public String contentType;
    public DisplayvideoCustomBiddingAlgorithmsScriptsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CustomBiddingScript customBiddingScript;
    public DisplayvideoCustomBiddingAlgorithmsScriptsGetResponse withCustomBiddingScript(openapisdk.models.shared.CustomBiddingScript customBiddingScript) {
        this.customBiddingScript = customBiddingScript;
        return this;
    }
    public Long statusCode;
    public DisplayvideoCustomBiddingAlgorithmsScriptsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}