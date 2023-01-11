package openapisdk.models.operations;



public class UpdateDeployedDevicesFleetResponse {
    public String contentType;
    public UpdateDeployedDevicesFleetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateDeployedDevicesFleetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.PreviewDeployedDevicesFleet previewDeployedDevicesFleet;
    public UpdateDeployedDevicesFleetResponse withPreviewDeployedDevicesFleet(openapisdk.models.shared.PreviewDeployedDevicesFleet previewDeployedDevicesFleet) {
        this.previewDeployedDevicesFleet = previewDeployedDevicesFleet;
        return this;
    }
}