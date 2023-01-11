package openapisdk.models.operations;



public class DisplayvideoCustomBiddingAlgorithmsScriptsCreateResponse {
    public String contentType;
    public DisplayvideoCustomBiddingAlgorithmsScriptsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CustomBiddingScript customBiddingScript;
    public DisplayvideoCustomBiddingAlgorithmsScriptsCreateResponse withCustomBiddingScript(openapisdk.models.shared.CustomBiddingScript customBiddingScript) {
        this.customBiddingScript = customBiddingScript;
        return this;
    }
    public Long statusCode;
    public DisplayvideoCustomBiddingAlgorithmsScriptsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}