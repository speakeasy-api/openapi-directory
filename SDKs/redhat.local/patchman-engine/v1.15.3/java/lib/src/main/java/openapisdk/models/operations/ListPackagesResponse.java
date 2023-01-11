package openapisdk.models.operations;



public class ListPackagesResponse {
    public String contentType;
    public ListPackagesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ListPackagesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ControllersPackagesResponse controllersPackagesResponse;
    public ListPackagesResponse withControllersPackagesResponse(openapisdk.models.shared.ControllersPackagesResponse controllersPackagesResponse) {
        this.controllersPackagesResponse = controllersPackagesResponse;
        return this;
    }
}