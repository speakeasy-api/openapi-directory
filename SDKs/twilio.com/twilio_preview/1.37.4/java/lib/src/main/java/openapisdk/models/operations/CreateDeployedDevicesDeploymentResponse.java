package openapisdk.models.operations;



public class CreateDeployedDevicesDeploymentResponse {
    public String contentType;
    public CreateDeployedDevicesDeploymentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateDeployedDevicesDeploymentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.PreviewDeployedDevicesFleetDeployment previewDeployedDevicesFleetDeployment;
    public CreateDeployedDevicesDeploymentResponse withPreviewDeployedDevicesFleetDeployment(openapisdk.models.shared.PreviewDeployedDevicesFleetDeployment previewDeployedDevicesFleetDeployment) {
        this.previewDeployedDevicesFleetDeployment = previewDeployedDevicesFleetDeployment;
        return this;
    }
}