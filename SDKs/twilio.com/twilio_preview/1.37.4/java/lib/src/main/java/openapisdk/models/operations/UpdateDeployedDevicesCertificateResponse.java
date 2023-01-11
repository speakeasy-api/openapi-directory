package openapisdk.models.operations;



public class UpdateDeployedDevicesCertificateResponse {
    public String contentType;
    public UpdateDeployedDevicesCertificateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateDeployedDevicesCertificateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.PreviewDeployedDevicesFleetCertificate previewDeployedDevicesFleetCertificate;
    public UpdateDeployedDevicesCertificateResponse withPreviewDeployedDevicesFleetCertificate(openapisdk.models.shared.PreviewDeployedDevicesFleetCertificate previewDeployedDevicesFleetCertificate) {
        this.previewDeployedDevicesFleetCertificate = previewDeployedDevicesFleetCertificate;
        return this;
    }
}