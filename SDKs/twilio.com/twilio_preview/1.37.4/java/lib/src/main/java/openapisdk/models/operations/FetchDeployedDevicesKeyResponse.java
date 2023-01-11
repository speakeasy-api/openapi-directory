package openapisdk.models.operations;



public class FetchDeployedDevicesKeyResponse {
    public String contentType;
    public FetchDeployedDevicesKeyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchDeployedDevicesKeyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.PreviewDeployedDevicesFleetKey previewDeployedDevicesFleetKey;
    public FetchDeployedDevicesKeyResponse withPreviewDeployedDevicesFleetKey(openapisdk.models.shared.PreviewDeployedDevicesFleetKey previewDeployedDevicesFleetKey) {
        this.previewDeployedDevicesFleetKey = previewDeployedDevicesFleetKey;
        return this;
    }
}