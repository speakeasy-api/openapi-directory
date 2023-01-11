package openapisdk.models.operations;



public class StartStreamResponse {
    public String contentType;
    public StartStreamResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.StartStreamResponse startStreamResponse;
    public StartStreamResponse withStartStreamResponse(openapisdk.models.shared.StartStreamResponse startStreamResponse) {
        this.startStreamResponse = startStreamResponse;
        return this;
    }
    public Long statusCode;
    public StartStreamResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}