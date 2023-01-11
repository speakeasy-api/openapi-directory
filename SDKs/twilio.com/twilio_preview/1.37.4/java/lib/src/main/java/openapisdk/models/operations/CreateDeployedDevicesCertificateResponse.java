package openapisdk.models.operations;



public class CreateDeployedDevicesCertificateResponse {
    public String contentType;
    public CreateDeployedDevicesCertificateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateDeployedDevicesCertificateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.PreviewDeployedDevicesFleetCertificate previewDeployedDevicesFleetCertificate;
    public CreateDeployedDevicesCertificateResponse withPreviewDeployedDevicesFleetCertificate(openapisdk.models.shared.PreviewDeployedDevicesFleetCertificate previewDeployedDevicesFleetCertificate) {
        this.previewDeployedDevicesFleetCertificate = previewDeployedDevicesFleetCertificate;
        return this;
    }
}