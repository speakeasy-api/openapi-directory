package openapisdk.models.operations;



public class AppengineProjectsLocationsGetResponse {
    public String contentType;
    public AppengineProjectsLocationsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Location location;
    public AppengineProjectsLocationsGetResponse withLocation(openapisdk.models.shared.Location location) {
        this.location = location;
        return this;
    }
    public Long statusCode;
    public AppengineProjectsLocationsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}