package openapisdk.models.operations;



public class FetchMediaProcessorResponse {
    public String contentType;
    public FetchMediaProcessorResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchMediaProcessorResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.MediaV1MediaProcessor mediaV1MediaProcessor;
    public FetchMediaProcessorResponse withMediaV1MediaProcessor(openapisdk.models.shared.MediaV1MediaProcessor mediaV1MediaProcessor) {
        this.mediaV1MediaProcessor = mediaV1MediaProcessor;
        return this;
    }
}