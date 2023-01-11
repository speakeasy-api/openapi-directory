package openapisdk.models.operations;



public class UpdateDeployedDevicesKeyResponse {
    public String contentType;
    public UpdateDeployedDevicesKeyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateDeployedDevicesKeyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.PreviewDeployedDevicesFleetKey previewDeployedDevicesFleetKey;
    public UpdateDeployedDevicesKeyResponse withPreviewDeployedDevicesFleetKey(openapisdk.models.shared.PreviewDeployedDevicesFleetKey previewDeployedDevicesFleetKey) {
        this.previewDeployedDevicesFleetKey = previewDeployedDevicesFleetKey;
        return this;
    }
}