package openapisdk.models.operations;



public class ExportPackageSystemsResponse {
    public String contentType;
    public ExportPackageSystemsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ExportPackageSystemsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ControllersPackageSystemItem[] controllersPackageSystemItems;
    public ExportPackageSystemsResponse withControllersPackageSystemItems(openapisdk.models.shared.ControllersPackageSystemItem[] controllersPackageSystemItems) {
        this.controllersPackageSystemItems = controllersPackageSystemItems;
        return this;
    }
}