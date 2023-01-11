package openapisdk.models.operations;



public class BrowseNearEarthObjectsResponse {
    public String contentType;
    public BrowseNearEarthObjectsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.NearEarthObject nearEarthObject;
    public BrowseNearEarthObjectsResponse withNearEarthObject(openapisdk.models.shared.NearEarthObject nearEarthObject) {
        this.nearEarthObject = nearEarthObject;
        return this;
    }
    public Long statusCode;
    public BrowseNearEarthObjectsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}