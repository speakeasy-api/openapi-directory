package openapisdk.models.operations;



public class PackageSystemsResponse {
    public String contentType;
    public PackageSystemsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PackageSystemsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ControllersPackageSystemsResponse controllersPackageSystemsResponse;
    public PackageSystemsResponse withControllersPackageSystemsResponse(openapisdk.models.shared.ControllersPackageSystemsResponse controllersPackageSystemsResponse) {
        this.controllersPackageSystemsResponse = controllersPackageSystemsResponse;
        return this;
    }
}