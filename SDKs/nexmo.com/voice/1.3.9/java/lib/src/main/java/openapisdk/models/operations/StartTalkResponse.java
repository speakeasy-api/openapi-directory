package openapisdk.models.operations;



public class StartTalkResponse {
    public String contentType;
    public StartTalkResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.StartTalkResponse startTalkResponse;
    public StartTalkResponse withStartTalkResponse(openapisdk.models.shared.StartTalkResponse startTalkResponse) {
        this.startTalkResponse = startTalkResponse;
        return this;
    }
    public Long statusCode;
    public StartTalkResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}