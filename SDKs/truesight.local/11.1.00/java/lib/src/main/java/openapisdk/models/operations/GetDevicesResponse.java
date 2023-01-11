package openapisdk.models.operations;



public class GetDevicesResponse {
    public byte[] body;
    public GetDevicesResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetDevicesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetDevicesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}