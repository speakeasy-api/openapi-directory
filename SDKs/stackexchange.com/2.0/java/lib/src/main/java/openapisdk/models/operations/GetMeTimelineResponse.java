package openapisdk.models.operations;



public class GetMeTimelineResponse {
    public byte[] body;
    public GetMeTimelineResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetMeTimelineResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetMeTimelineResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}