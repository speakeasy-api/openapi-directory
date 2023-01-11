package openapisdk.models.operations;



public class StopStreamResponse {
    public String contentType;
    public StopStreamResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public StopStreamResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.StopStreamResponse stopStreamResponse;
    public StopStreamResponse withStopStreamResponse(openapisdk.models.shared.StopStreamResponse stopStreamResponse) {
        this.stopStreamResponse = stopStreamResponse;
        return this;
    }
}