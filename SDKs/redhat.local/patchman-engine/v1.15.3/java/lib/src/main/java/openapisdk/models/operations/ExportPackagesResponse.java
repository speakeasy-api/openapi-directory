package openapisdk.models.operations;



public class ExportPackagesResponse {
    public byte[] body;
    public ExportPackagesResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public ExportPackagesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ExportPackagesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ControllersPackageItem[] controllersPackageItems;
    public ExportPackagesResponse withControllersPackageItems(openapisdk.models.shared.ControllersPackageItem[] controllersPackageItems) {
        this.controllersPackageItems = controllersPackageItems;
        return this;
    }
}