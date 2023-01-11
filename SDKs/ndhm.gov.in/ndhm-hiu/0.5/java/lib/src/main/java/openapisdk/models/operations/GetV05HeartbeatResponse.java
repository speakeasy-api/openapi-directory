package openapisdk.models.operations;



public class GetV05HeartbeatResponse {
    public byte[] body;
    public GetV05HeartbeatResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetV05HeartbeatResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.HeartbeatResponse heartbeatResponse;
    public GetV05HeartbeatResponse withHeartbeatResponse(openapisdk.models.shared.HeartbeatResponse heartbeatResponse) {
        this.heartbeatResponse = heartbeatResponse;
        return this;
    }
    public Long statusCode;
    public GetV05HeartbeatResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}