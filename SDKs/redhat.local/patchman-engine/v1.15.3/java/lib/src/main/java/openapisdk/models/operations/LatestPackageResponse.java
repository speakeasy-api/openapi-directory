package openapisdk.models.operations;



public class LatestPackageResponse {
    public String contentType;
    public LatestPackageResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public LatestPackageResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ControllersPackageDetailResponse controllersPackageDetailResponse;
    public LatestPackageResponse withControllersPackageDetailResponse(openapisdk.models.shared.ControllersPackageDetailResponse controllersPackageDetailResponse) {
        this.controllersPackageDetailResponse = controllersPackageDetailResponse;
        return this;
    }
}