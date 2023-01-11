package openapisdk.models.operations;



public class FetchDeployedDevicesDeviceResponse {
    public String contentType;
    public FetchDeployedDevicesDeviceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchDeployedDevicesDeviceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.PreviewDeployedDevicesFleetDevice previewDeployedDevicesFleetDevice;
    public FetchDeployedDevicesDeviceResponse withPreviewDeployedDevicesFleetDevice(openapisdk.models.shared.PreviewDeployedDevicesFleetDevice previewDeployedDevicesFleetDevice) {
        this.previewDeployedDevicesFleetDevice = previewDeployedDevicesFleetDevice;
        return this;
    }
}