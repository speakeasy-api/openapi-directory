package openapisdk.models.operations;



public class FetchDeployedDevicesFleetResponse {
    public String contentType;
    public FetchDeployedDevicesFleetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchDeployedDevicesFleetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.PreviewDeployedDevicesFleet previewDeployedDevicesFleet;
    public FetchDeployedDevicesFleetResponse withPreviewDeployedDevicesFleet(openapisdk.models.shared.PreviewDeployedDevicesFleet previewDeployedDevicesFleet) {
        this.previewDeployedDevicesFleet = previewDeployedDevicesFleet;
        return this;
    }
}