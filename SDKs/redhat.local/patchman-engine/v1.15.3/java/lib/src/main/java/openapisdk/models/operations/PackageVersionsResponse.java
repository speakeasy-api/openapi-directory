package openapisdk.models.operations;



public class PackageVersionsResponse {
    public String contentType;
    public PackageVersionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PackageVersionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ControllersPackageVersionsResponse controllersPackageVersionsResponse;
    public PackageVersionsResponse withControllersPackageVersionsResponse(openapisdk.models.shared.ControllersPackageVersionsResponse controllersPackageVersionsResponse) {
        this.controllersPackageVersionsResponse = controllersPackageVersionsResponse;
        return this;
    }
}