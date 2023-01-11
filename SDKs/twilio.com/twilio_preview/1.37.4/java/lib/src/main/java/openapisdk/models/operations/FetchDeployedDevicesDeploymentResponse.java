package openapisdk.models.operations;



public class FetchDeployedDevicesDeploymentResponse {
    public String contentType;
    public FetchDeployedDevicesDeploymentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchDeployedDevicesDeploymentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.PreviewDeployedDevicesFleetDeployment previewDeployedDevicesFleetDeployment;
    public FetchDeployedDevicesDeploymentResponse withPreviewDeployedDevicesFleetDeployment(openapisdk.models.shared.PreviewDeployedDevicesFleetDeployment previewDeployedDevicesFleetDeployment) {
        this.previewDeployedDevicesFleetDeployment = previewDeployedDevicesFleetDeployment;
        return this;
    }
}