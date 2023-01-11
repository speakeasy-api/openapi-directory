package openapisdk.models.operations;



public class DisplayvideoCustomBiddingAlgorithmsUploadScriptResponse {
    public String contentType;
    public DisplayvideoCustomBiddingAlgorithmsUploadScriptResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CustomBiddingScriptRef customBiddingScriptRef;
    public DisplayvideoCustomBiddingAlgorithmsUploadScriptResponse withCustomBiddingScriptRef(openapisdk.models.shared.CustomBiddingScriptRef customBiddingScriptRef) {
        this.customBiddingScriptRef = customBiddingScriptRef;
        return this;
    }
    public Long statusCode;
    public DisplayvideoCustomBiddingAlgorithmsUploadScriptResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}