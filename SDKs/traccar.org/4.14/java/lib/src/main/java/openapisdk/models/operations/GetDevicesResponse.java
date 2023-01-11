package openapisdk.models.operations;



public class GetDevicesResponse {
    public String contentType;
    public GetDevicesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Device[] devices;
    public GetDevicesResponse withDevices(openapisdk.models.shared.Device[] devices) {
        this.devices = devices;
        return this;
    }
    public Long statusCode;
    public GetDevicesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}