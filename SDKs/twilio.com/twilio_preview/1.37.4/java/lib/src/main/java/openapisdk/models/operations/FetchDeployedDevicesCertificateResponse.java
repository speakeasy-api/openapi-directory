package openapisdk.models.operations;



public class FetchDeployedDevicesCertificateResponse {
    public String contentType;
    public FetchDeployedDevicesCertificateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchDeployedDevicesCertificateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.PreviewDeployedDevicesFleetCertificate previewDeployedDevicesFleetCertificate;
    public FetchDeployedDevicesCertificateResponse withPreviewDeployedDevicesFleetCertificate(openapisdk.models.shared.PreviewDeployedDevicesFleetCertificate previewDeployedDevicesFleetCertificate) {
        this.previewDeployedDevicesFleetCertificate = previewDeployedDevicesFleetCertificate;
        return this;
    }
}