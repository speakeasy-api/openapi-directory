package openapisdk.models.operations;



public class SystemPackagesResponse {
    public String contentType;
    public SystemPackagesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public SystemPackagesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ControllersSystemPackageResponse controllersSystemPackageResponse;
    public SystemPackagesResponse withControllersSystemPackageResponse(openapisdk.models.shared.ControllersSystemPackageResponse controllersSystemPackageResponse) {
        this.controllersSystemPackageResponse = controllersSystemPackageResponse;
        return this;
    }
}