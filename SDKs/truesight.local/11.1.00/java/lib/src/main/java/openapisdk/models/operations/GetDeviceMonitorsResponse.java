package openapisdk.models.operations;



public class GetDeviceMonitorsResponse {
    public byte[] body;
    public GetDeviceMonitorsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetDeviceMonitorsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetDeviceMonitorsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}