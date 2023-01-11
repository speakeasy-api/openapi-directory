package openapisdk.models.operations;



public class CreateDeployedDevicesKeyResponse {
    public String contentType;
    public CreateDeployedDevicesKeyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateDeployedDevicesKeyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.PreviewDeployedDevicesFleetKey previewDeployedDevicesFleetKey;
    public CreateDeployedDevicesKeyResponse withPreviewDeployedDevicesFleetKey(openapisdk.models.shared.PreviewDeployedDevicesFleetKey previewDeployedDevicesFleetKey) {
        this.previewDeployedDevicesFleetKey = previewDeployedDevicesFleetKey;
        return this;
    }
}