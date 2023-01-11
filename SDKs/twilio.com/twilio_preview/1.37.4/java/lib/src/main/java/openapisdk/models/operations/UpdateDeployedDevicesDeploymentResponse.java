package openapisdk.models.operations;



public class UpdateDeployedDevicesDeploymentResponse {
    public String contentType;
    public UpdateDeployedDevicesDeploymentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateDeployedDevicesDeploymentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.PreviewDeployedDevicesFleetDeployment previewDeployedDevicesFleetDeployment;
    public UpdateDeployedDevicesDeploymentResponse withPreviewDeployedDevicesFleetDeployment(openapisdk.models.shared.PreviewDeployedDevicesFleetDeployment previewDeployedDevicesFleetDeployment) {
        this.previewDeployedDevicesFleetDeployment = previewDeployedDevicesFleetDeployment;
        return this;
    }
}