package openapisdk.models.operations;



public class UpdateMediaProcessorResponse {
    public String contentType;
    public UpdateMediaProcessorResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateMediaProcessorResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.MediaV1MediaProcessor mediaV1MediaProcessor;
    public UpdateMediaProcessorResponse withMediaV1MediaProcessor(openapisdk.models.shared.MediaV1MediaProcessor mediaV1MediaProcessor) {
        this.mediaV1MediaProcessor = mediaV1MediaProcessor;
        return this;
    }
}