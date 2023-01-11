package openapisdk.models.operations;



public class ExportSystemPackagesResponse {
    public String contentType;
    public ExportSystemPackagesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ExportSystemPackagesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ControllersSystemPackageInline[] controllersSystemPackageInlines;
    public ExportSystemPackagesResponse withControllersSystemPackageInlines(openapisdk.models.shared.ControllersSystemPackageInline[] controllersSystemPackageInlines) {
        this.controllersSystemPackageInlines = controllersSystemPackageInlines;
        return this;
    }
}