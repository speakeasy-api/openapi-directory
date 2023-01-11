package openapisdk.models.operations;



public class PostDevicesResponse {
    public String contentType;
    public PostDevicesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Device device;
    public PostDevicesResponse withDevice(openapisdk.models.shared.Device device) {
        this.device = device;
        return this;
    }
    public Long statusCode;
    public PostDevicesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}