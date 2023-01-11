package openapisdk.models.operations;



public class UpdateDeployedDevicesDeviceResponse {
    public String contentType;
    public UpdateDeployedDevicesDeviceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateDeployedDevicesDeviceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.PreviewDeployedDevicesFleetDevice previewDeployedDevicesFleetDevice;
    public UpdateDeployedDevicesDeviceResponse withPreviewDeployedDevicesFleetDevice(openapisdk.models.shared.PreviewDeployedDevicesFleetDevice previewDeployedDevicesFleetDevice) {
        this.previewDeployedDevicesFleetDevice = previewDeployedDevicesFleetDevice;
        return this;
    }
}