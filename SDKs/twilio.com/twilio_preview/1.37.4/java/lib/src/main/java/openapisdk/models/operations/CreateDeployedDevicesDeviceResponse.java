package openapisdk.models.operations;



public class CreateDeployedDevicesDeviceResponse {
    public String contentType;
    public CreateDeployedDevicesDeviceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateDeployedDevicesDeviceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.PreviewDeployedDevicesFleetDevice previewDeployedDevicesFleetDevice;
    public CreateDeployedDevicesDeviceResponse withPreviewDeployedDevicesFleetDevice(openapisdk.models.shared.PreviewDeployedDevicesFleetDevice previewDeployedDevicesFleetDevice) {
        this.previewDeployedDevicesFleetDevice = previewDeployedDevicesFleetDevice;
        return this;
    }
}