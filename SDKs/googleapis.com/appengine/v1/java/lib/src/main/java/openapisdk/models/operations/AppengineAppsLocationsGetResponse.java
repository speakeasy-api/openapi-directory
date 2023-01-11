package openapisdk.models.operations;



public class AppengineAppsLocationsGetResponse {
    public String contentType;
    public AppengineAppsLocationsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Location location;
    public AppengineAppsLocationsGetResponse withLocation(openapisdk.models.shared.Location location) {
        this.location = location;
        return this;
    }
    public Long statusCode;
    public AppengineAppsLocationsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}