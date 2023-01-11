package openapisdk.models.operations;



public class GetDeviceResponse {
    public byte[] body;
    public GetDeviceResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetDeviceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetDeviceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}