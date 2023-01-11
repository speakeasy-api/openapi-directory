package openapisdk.models.operations;



public class StopTalkResponse {
    public String contentType;
    public StopTalkResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public StopTalkResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.StopTalkResponse stopTalkResponse;
    public StopTalkResponse withStopTalkResponse(openapisdk.models.shared.StopTalkResponse stopTalkResponse) {
        this.stopTalkResponse = stopTalkResponse;
        return this;
    }
}