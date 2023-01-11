package openapisdk.models.operations;



public class CreateDeployedDevicesFleetResponse {
    public String contentType;
    public CreateDeployedDevicesFleetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateDeployedDevicesFleetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.PreviewDeployedDevicesFleet previewDeployedDevicesFleet;
    public CreateDeployedDevicesFleetResponse withPreviewDeployedDevicesFleet(openapisdk.models.shared.PreviewDeployedDevicesFleet previewDeployedDevicesFleet) {
        this.previewDeployedDevicesFleet = previewDeployedDevicesFleet;
        return this;
    }
}