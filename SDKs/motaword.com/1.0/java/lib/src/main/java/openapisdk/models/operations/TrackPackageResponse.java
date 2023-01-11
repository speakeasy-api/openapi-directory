package openapisdk.models.operations;



public class TrackPackageResponse {
    public String contentType;
    public TrackPackageResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public TrackPackageResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.PackageStatus packageStatus;
    public TrackPackageResponse withPackageStatus(openapisdk.models.shared.PackageStatus packageStatus) {
        this.packageStatus = packageStatus;
        return this;
    }
    public Long statusCode;
    public TrackPackageResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}