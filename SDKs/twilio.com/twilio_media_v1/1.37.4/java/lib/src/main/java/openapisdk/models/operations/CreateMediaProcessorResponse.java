package openapisdk.models.operations;



public class CreateMediaProcessorResponse {
    public String contentType;
    public CreateMediaProcessorResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateMediaProcessorResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.MediaV1MediaProcessor mediaV1MediaProcessor;
    public CreateMediaProcessorResponse withMediaV1MediaProcessor(openapisdk.models.shared.MediaV1MediaProcessor mediaV1MediaProcessor) {
        this.mediaV1MediaProcessor = mediaV1MediaProcessor;
        return this;
    }
}